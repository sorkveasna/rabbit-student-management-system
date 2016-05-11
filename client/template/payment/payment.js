//Alertify
Template.payment.onRendered(function () {
    // Create new  alertify
    createNewAlertify('payment');
});

//insert
Template.payment.events({
    'click #js-insert': function (error, result) {

        alertify.payment(renderTemplate(Template.paymentInsert))
            .set({
                title: fa('plus', ' Payment')
            })
            .maximize();
    }

});

Template.paymentAction.events({
    'click #js-update': function (error, result) {
        Meteor.call('findOne', 'Collection.Payment', {_id: this._id}, {}, function (error, payment) {
            if (error) {
                Bert.alert(error.message, 'danger', 'growl-bottom-right');
            }
            else {
                Meteor.subscribe('payments');
                Meteor.subscribe('registers');
                Meteor.subscribe('students');
                Meteor.subscribe('subjects');
                alertify.payment(renderTemplate(Template.paymentUpdate, payment))
                    .set({
                        title: fa('edit', ' Payment')
                    })
                    .maximize();
            }
        });
    },

    // 'click #js-update': function () {
    //     FlowRouter.go('paymentUpdate', {id: this._id});
    // },
    'click .jsRemove': function () {
        var self = this;
        alertify.confirm("Are you sure want to delete?",
            function () {
                Collection.Payment.remove({_id: self._id}); /// remove by _id?
                alertify.success('Deleted');
            },
            function () {
                alertify.error('Cancel');
            });
    },
    'click #js-show': function () {
        Meteor.call('findOne', 'Collection.Payment', {_id: this._id}, {}, function (error, payment) {
            if (error) {
                Bert.alert(error.message, 'danger', 'growl-bottom-right');
            }
            else {
                alertify.payment(renderTemplate(Template.paymentShow, payment))
                    .set({
                        title: fa('eye', ' Payment')
                    });
            }
        });
    },
    'click #js-print': function () {
        // FlowRouter.go('printPayment',{id:this._id});
        let path = FlowRouter.path('printPayment', {id: this._id});
        window.open(path, '_blank');
    }
});
//Insert
Template.paymentInsert.onCreated(function () {
    this.subscribe("registers");
    this.subscribe("students");
    this.subscribe("payments");
    this.subscribe("subjects");
});
Template.paymentInsert.helpers({
    studentId: function () {
        var list = [];
        // list.push({label: "(Select All)", value: ""});
        Collection.Student.find()
            .forEach(function (obj) {
                list.push({label: obj._id + " | " + obj.latinName + ' | ' + obj.khmerName, value: obj._id});
            });

        return list
    },
    registerId: function () {
        var studentId = AutoForm.getFieldValue('studentId');
        //console.log(studentId);

        var data = Collection.Register.find({studentId: studentId});
        var list = [
            // {label: '(Select One)', value: ''}
        ];

        if (data) {
            data.forEach(function (obj) {
                var label;
                // Get subject
                var subject = Collection.Subject.findOne(obj.subjectId);

                // Check last paid
                var lastPaid = Collection.Payment.findOne({registerId: obj._id}, {sort: {_id: -1}});

                // console.log(lastPaid);

                if (lastPaid) {
                    if (math.round(lastPaid.osAmount, 2) > 0) {
                        label = obj._id + ' | ' + subject.name + ' | ' + lastPaid.osAmount;
                        list.push({label: label, value: obj._id});
                    }
                } else {
                    label = obj._id + ' | ' + subject.name + ' | ' + obj.amount;
                    list.push({label: label, value: obj._id});
                }
            });
        }

        return list;
    },
    dueAmount: function () {
        let dueAmount = 0;
        let registerId = AutoForm.getFieldValue('registerId');

        if (registerId) {
            let data = Collection.Register.findOne(registerId);
            // if (data) {
            dueAmount = data.amount;

            // Check last paid
            var lastPaid = Collection.Payment.findOne(
                {registerId: registerId},
                {sort: {_id: -1}}
            ); // _id in payment

            if (lastPaid) {
                dueAmount = lastPaid.osAmount;
                // return dueAmount;
            }
            // }
        }
        return dueAmount;
    },
    osAmount: function () {
        let osAmount = 0;
        let dueAmount = AutoForm.getFieldValue('dueAmount');
        let paidAmount = AutoForm.getFieldValue('paidAmount');
        return dueAmount - paidAmount;

    },
    type: "inputmask",
    afFieldInput: {
        inputmaskOptions: inputmaskOptions.currency()
    }


});
Template.paymentInsert.events({
    'keyup .jsPaidAmount': function () {
        let paidAmount = $('.jsPaidAmount').val();
        let dueAmount = $('.jsDueAmount').val();
        $('.jsOsAmount').val(dueAmount - paidAmount);
    },
    'click #js-savePrint': function () {
        Session.set('print', true)
    }

});

// Update
// Template.paymentUpdate.onCreated(function () {
//     let paymentId = FlowRouter.getParam("id");
//     this.subscribe("payment", paymentId);
//     this.subscribe("registers");
//     this.subscribe("students");
//     this.subscribe("subjects");
// });
Template.paymentUpdate.events({
    'keyup .jsPaidAmount': function () {
        let paidAmount = $('.jsPaidAmount').val();
        let dueAmount = $('.jsDueAmount').val();
        $('.jsOsAmount').val(dueAmount - paidAmount);
    }

});
// Template.paymentUpdate.helpers({
//     paymentDoc: function () {
//         var id = FlowRouter.getParam('id');
//         var payment = Collection.Payment.findOne({_id: id});
//         return payment;
//     },
// });

//Show
// Template.paymentShow.onCreated(function () {
//     this.subscribe('payments');
// });
//
// Template.paymentShow.helpers({
//     data: function () {
//         return Collection.Payment.findOne(this._id);
//     }
// });

//hook
AutoForm.hooks({
        paymentInsert: {//id autoform
            before: {
                insert: function (doc) {
                    doc._id = idGenerator.gen(Collection.Payment, 3);
                    return doc;
                }
            },
            onSuccess(formType, result){

                var paymentId = result;
                var printSession = Session.get('print');

                if (printSession) {
                    Session.set('print', false);
                    let paymentDoc = Collection.Payment.findOne({_id: paymentId});
                    let q = paymentDoc._id;
                    let url = '/rabbit/printPayment/' + q;
                    window.open(url);
                    // let path = FlowRouter.path('printPayment', paymentDoc._id);
                    // window.open(path, '_blank');
                    alertify.payment().close();
                }

                //Bert.Alert('Successfully Added', 'success', 'growl-top-right');
                alertify.success('Successfully Added');
            },
            onError(formType, error){
                alertify.error(error.message);
                //Bert.alert(error.message, 'danger', 'growl-top-right');
            }

        },
        paymentUpdate: {//id autoform
            onSuccess(formType, result)
            {
                //Bert.Alert('Successfully Added', 'success', 'growl-top-right');
                alertify.success('Successfully Updated');
                alertify.payment().close();
            },
            onError(formType, error)
            {
                alertify.error(error.message);
                //Bert.alert(error.message, 'danger', 'growl-top-right');
            }
        }
    }
)
;


