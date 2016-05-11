//Alertify
Template.status.onRendered(function () {
    // Create new  alertify
    createNewAlertify('status'); //status is name of alertify

});

//insert
Template.status.events({
    'click #js-insert': function (error, result) {

        alertify.status(renderTemplate(Template.statusInsert))
            .set({
                title: fa('plus', ' Status')
            })
            .maximize();
    }
});

Template.statusAction.events({
    'click #js-update': function (error, result) {
        Meteor.call('findOne', 'Collection.Status', {_id: this._id}, {}, function (error, status) {
            if (error) {
                Bert.alert(error.message, 'danger', 'growl-bottom-right');
            }
            else {
                alertify.status(renderTemplate(Template.statusUpdate, status))
                    .set({
                        title: fa('edit', ' Status')
                    })
                    .maximize();
            }
        });
    },
    'click .jsRemove': function () {
        var self = this;
        alertify.confirm("Are you sure want to delete?",
            function () {
                Collection.Status.remove({_id: self._id}); /// remove by _id?
                alertify.success('Deleted');
            },
            function () {
                alertify.error('Cancel');
            });
    },
    'click #js-show': function () {
        Meteor.call('findOne', 'Collection.Status', {_id: this._id}, {}, function (error, status) {
            if (error) {
                Bert.alert(error.message, 'danger', 'growl-bottom-right');
            }
            else {
                alertify.status(renderTemplate(Template.statusShow, status))
                    .set({
                        title: fa('eye', ' Status')
                    });
            }
        });
    }
});

//Insert
Template.statusInsert.helpers({
    status: function () {
        return [
            // {label:'(Select One)',value:''},
            {label: 'Close', value: 'Close'},
            {label: 'Suspend', value: 'Suspend'},
            {label: 'Cancel', value: 'Cancel'},
            {label: 'Active', value: 'Active'}
        ]
    },
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

        var data = Collection.Register.find({studentId: studentId});
        var list = [
            // {label: '(Select One)', value: ''}
        ];
        data.forEach(function (obj) {

            list.push({
                label: obj._id + '|' + obj._subject.name,
                value: obj._id
            })
        });
        return list;
    }


});

Template.statusUpdate.onRendered(function () {
    $('#register-id').val(this.data.registerId);
});

//Update
Template.statusUpdate.helpers({
    status: function () {
        return [
            {label: 'Active', value: 'Active'},
            {label: 'Close', value: 'Close'},
            {label: 'Suspend', value: 'Suspend'},
            {label: 'Cancel', value: 'Cancel'}
        ]
    },
    // studentId: function () {
    //     var list = [];
    //     // list.push({label: "(Select All)", value: ""});
    //     Collection.Student.find()
    //         .forEach(function (obj) {
    //             list.push({label: obj._id + " | " + obj.latinName + ' | ' + obj.khmerName, value: obj._id});
    //         });
    //
    //     return list
    // },
    // registerId: function () {
    //     var studentId = AutoForm.getFieldValue('studentId');
    //
    //     var data = Collection.Register.find({studentId: studentId});
    //     var list = [
    //         // {label: '(Select One)', value: ''}
    //     ];
    //     data.forEach(function (obj) {
    //
    //         list.push({
    //             label: obj._id + '|' + obj._subject.name,
    //             value: obj._id
    //         })
    //     });
    //     return list;
    // }
    
});

//Show
// Template.statusShow.onCreated(function () {
//     this.subscribe('statuses');
// });

// Template.statusShow.helpers({
//     data: function () {
//         return Collection.Status.findOne(this._id);
//     }
// });
Template.statusInsert.onCreated(function () {
    this.subscribe('students');
    this.subscribe('registers');
});

//hook
AutoForm.hooks({
        statusInsert: {//id autoform
            onSuccess(formType, id){
                //Bert.Alert('Successfully Added', 'success', 'growl-top-right');
                alertify.success('Successfully Added');
                // FlowRouter.go('status');
            },
            onError(formType, error){
                alertify.error(error.message);
                //Bert.alert(error.message, 'danger', 'growl-top-right');
            }
        },
        statusUpdate: {//id autoform
            // before:{
            //     update(doc){
            //         return doc;
            //     }
            //
            // },
            onSuccess(formType, id){
                //Bert.Alert('Successfully Added', 'success', 'growl-top-right');
                alertify.success('Successfully Added');
                alertify.status().close();
            },
            onError(formType, error){
                alertify.error(error.message);
                //Bert.alert(error.message, 'danger', 'growl-top-right');
            }
        }
    }
);
