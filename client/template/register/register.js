//Alertify
Template.register.onRendered(function () {
    // Create new  alertify
    createNewAlertify('register');
});

//insert
Template.register.events({
    'click #js-insert': function (error, result) {

        alertify.register(renderTemplate(Template.registerInsert))
            .set({
                title: fa('plus', ' Register')
            })
            .maximize();
    }
});

Template.registerAction.events({
    'click #js-update': function (error, result) {
        Meteor.call('findOne', 'Collection.Register', {_id: this._id}, {}, function (error, register) {
            if (error) {
                Bert.alert(error.message, 'danger', 'growl-bottom-right');
            }
            else {
                alertify.register(renderTemplate(Template.registerUpdate, register))
                    .set({
                        title: fa('edit', ' Register')
                    })
                    .maximize();
            }
        });
    },

    // 'click #js-update': function () {
    //     FlowRouter.go('registerUpdate', {id: this._id});
    // },
    'click .jsRemove': function () {
        var self = this;
        alertify.confirm("Are you sure want to delete?",
            function () {
                Collection.Register.remove({_id: self._id}); /// remove by _id?
                alertify.success('Deleted');
            },
            function () {
                alertify.error('Cancel');
            });
    },
    'click #js-show': function () {
        Meteor.call('findOne', 'Collection.Register', {_id: this._id}, {}, function (error, register) {
            if (error) {
                Bert.alert(error.message, 'danger', 'growl-bottom-right');
            }
            else {
                alertify.register(renderTemplate(Template.registerShow, register))
                    .set({
                        title: fa('eye', ' Register')
                    });
            }
        });
    }
});

// Insert
Template.registerInsert.onCreated(function () {
    this.subscribe("teachers");
    this.subscribe("students");
    this.subscribe("subjects");
});
Template.registerInsert.events({
    'change .jsSubjectId': function () {
        let discount = $(".jsDiscount").val();
        let price = $(".jsPrice").val();
        let amount;
        amount = price - discount;
        $(".jsAmount").val(amount);
        // $(".jsDiscount").val(0);
    },
    'keyup .jsDiscount': function () {
        let discount = $(".jsDiscount").val();
        let price = $(".jsPrice").val();
        //discount=0;

        // let amount;
        // amount = price - discount;
        // $(".jsAmount").val(amount);
        $(".jsAmount").val(price - discount);
    }

});

Template.registerInsert.helpers({
    studentId: function () {
        var data = Collection.Student.find();
        var list = [
            {label: '(Select One)', value: ''}
        ];

        data.forEach(function (obj) {
            list.push({label: obj._id + ' : ' + obj.latinName, value: obj._id})
        });
        return list;
    },
    subjectId: function () {
        var data = Collection.Subject.find();
        var list = [
            {label: '(Select One)', value: ''}
        ];

        data.forEach(function (obj) {
            list.push({label: obj._id + ' : ' + obj.name + ' | Price: ' + obj.price, value: obj._id});
        });
        return list;
    },
    teacherId: function () {
        let subjectId = AutoForm.getFieldValue('subjectId');
        if (!_.isUndefined(subjectId)) {
            let subject = Collection.Subject.findOne(subjectId);
            let arr = [
                subject.name
            ];

            var data = Collection.Teacher.find({subject: {$in: arr}});
            var list = [];

            data.forEach(function (obj) {
                list.push({label: obj._id + ' : ' + obj.name, value: obj._id})
            });


            return list;
        }
        return [
            {label: '(Select One)', value: ''}
        ];
    },
    day: function () {
        return [
            {label: '(Select One)', value: ''},
            {label: "Monday-Friday", value: 'mondayFriday'},
            {label: "Saturday-Sunday", value: 'saturdaySunday'}
        ];
    },
    time: function () {
        let day = AutoForm.getFieldValue('day');
        if (day == "mondayFriday") {
            return [
                {label: '(Select One)', value: ''},
                {label: "8:00-9:00am", value: '8:00-9:00'},
                {label: "9:00-10:00am", value: '9:00-10:00'},
                {label: "10:00-11:00am", value: '10:00-11:00'},
                {label: "11:00-12:00am", value: '11:00-12:00'},
                {label: "2:00-3:00pm", value: '2:00-3:00'},
                {label: "3:00-4:00pm", value: '3:00-4:00'},
                {label: "4:00-5:00pm", value: '4:00-5:00'},
                {label: "5:00-6:00pm", value: '5:00-6:00'}
            ];
        }
        else {
            return [
                {label: '(Select One)', value: ''},
                {label: "8:00-11:00am", value: '8:00-11:00'},
                {label: "2:00-3:00pm", value: '2:00-3:00'}
            ];
        }
    },
    amount: function () {
        let price = AutoForm.getFieldValue('price');
        let discount = AutoForm.getFieldValue('discount');
        return price - discount;
    }
});

//Update
Template.registerUpdate.onCreated(function () {
    let registerId = FlowRouter.getParam("id");
    this.subscribe("register", registerId);

    this.subscribe("teachers", registerId);
    this.subscribe("students", registerId);
    this.subscribe("subjects", registerId);
});
Template.registerUpdate.helpers({
    studentId: function () {
        var data = Collection.Student.find();
        var list = [
            {label: '(Select One)', value: ''}
        ];

        data.forEach(function (obj) {
            list.push({label: obj._id + ' : ' + obj.latinName, value: obj._id})
        });
        return list;
    },
    subjectId: function () {
        var data = Collection.Subject.find();
        var list = [
            {label: '(Select One)', value: ''}
        ];

        data.forEach(function (obj) {
            list.push({label: obj._id + ' : ' + obj.name + ' | Price: ' + obj.price, value: obj._id});
        });
        return list;
    },
    teacherId: function () {
        let subjectId = AutoForm.getFieldValue('subjectId');
        if (!_.isUndefined(subjectId)) {
            let subject = Collection.Subject.findOne(subjectId);
            let arr = [
                subject.name
            ];

            var data = Collection.Teacher.find({subject: {$in: arr}});
            var list = [];

            data.forEach(function (obj) {
                list.push({label: obj._id + ' : ' + obj.name, value: obj._id})
            });


            return list;
        }
        return [
            {label: '(Select One)', value: ''}
        ];
    },
    day: function () {
        return [
            {label: '(Select One)', value: ''},
            {label: "Monday-Friday", value: 'mondayFriday'},
            {label: "Saturday-Sunday", value: 'saturdaySunday'}
        ];
    },
    time: function () {
        let day = AutoForm.getFieldValue('day');
        if (day == "mondayFriday") {
            return [
                {label: '(Select One)', value: ''},
                {label: "8:00-9:00am", value: '8:00-9:00'},
                {label: "9:00-10:00am", value: '9:00-10:00'},
                {label: "10:00-11:00am", value: '10:00-11:00'},
                {label: "11:00-12:00am", value: '11:00-12:00'},
                {label: "2:00-3:00pm", value: '2:00-3:00'},
                {label: "3:00-4:00pm", value: '3:00-4:00'},
                {label: "4:00-5:00pm", value: '4:00-5:00'},
                {label: "5:00-6:00pm", value: '5:00-6:00'}
            ];
        }
        else {
            return [
                {label: '(Select One)', value: ''},
                {label: "8:00-11:00am", value: '8:00-11:00'},
                {label: "2:00-3:00pm", value: '2:00-3:00'}
            ];
        }
    },
    amount: function () {
        let price = AutoForm.getFieldValue('price');
        let discount = AutoForm.getFieldValue('discount');
        return price - discount;
    }
});

Template.registerUpdate.events({
    'change .jsSubjectId': function () {
        let discount = $(".jsDiscount").val();
        let price = $(".jsPrice").val();
        let amount;
        amount = price - discount;
        $(".jsAmount").val(amount);
        // $(".jsDiscount").val(0);
    },
    'keyup .jsDiscount': function () {
        let discount = $(".jsDiscount").val();
        let price = $(".jsPrice").val();
        //discount=0;

        // let amount;
        // amount = price - discount;
        // $(".jsAmount").val(amount);
        $(".jsAmount").val(price - discount);
    }

});
// Template.registerUpdate.helpers({
//     registerDoc: function () {
//         var id = FlowRouter.getParam('id');
//         var register = Collection.Register.findOne({_id: id});
//         return register;
//     }
// });

//Show
// Template.registerShow.onCreated(function () {
//     this.subscribe('registers');
// });
//
// Template.registerShow.helpers({
//     data: function () {
//         return Collection.Register.findOne(this._id);
//     }
// });

//hook
AutoForm.hooks({
    registerInsert: {//id autoform
        onSuccess(formType, id){
            //Bert.Alert('Successfully Added', 'success', 'growl-top-right');
            alertify.success('Successfully Added');
            // FlowRouter.go('register');
        },
        onError(formType, error){
            alertify.error(error.message);
            //Bert.alert(error.message, 'danger', 'growl-top-right');
        }
    },
    registerUpdate: {//id autoform
        onSuccess(formType, id){
            //Bert.Alert('Successfully Added', 'success', 'growl-top-right');
            alertify.success('Successfully Updated');
            alertify.register().close();
        },
        onError(formType, error){
            alertify.error(error.message);
            //Bert.alert(error.message, 'danger', 'growl-top-right');
        }
    }
});


