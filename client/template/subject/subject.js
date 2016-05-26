//Alertify
Template.subject.onRendered(function () {
    // Create new  alertify
    createNewAlertify('subject'); //subject is name of alertify

});

//insert
Template.subject.events({
    'click #js-insert': function (error, result) {

        alertify.subject(renderTemplate(Template.subjectInsert))
            .set({
                title: fa('plus', ' Subject')
            })
            .maximize();
    }
});

Template.subjectAction.events({
    'click #js-update': function (error, result) {
        Meteor.call('findOne', 'Collection.Subject', {_id: this._id}, {}, function (error, subject) {
            if (error) {
                Bert.alert(error.message, 'danger', 'growl-bottom-right');
            }
            else {
                alertify.subject(renderTemplate(Template.subjectUpdate, subject))
                    .set({
                        title: fa('edit', ' Subject')
                    })
                    .maximize();
            }
        });
    },
    'click .jsRemove': function () {
        var self = this;
        alertify.confirm("Are you sure want to delete?",
            function () {
                Collection.Subject.remove({_id: self._id}); /// remove by _id?
                alertify.success('Deleted');
            },
            function () {
                alertify.error('Cancel');
            });
    },
    'click #js-show': function () {
        Meteor.call('findOne', 'Collection.Subject', {_id: this._id}, {}, function (error, subject) {
            if (error) {
                Bert.alert(error.message, 'danger', 'growl-bottom-right');
            }
            else {
                alertify.subject(renderTemplate(Template.subjectShow, subject))
                    .set({
                        title: fa('eye', ' Subject')
                    });
            }
        });
    }
});

//hook
AutoForm.hooks({
        subjectInsert:{//id autoform
            onSuccess(formType, id){
                //Bert.Alert('Successfully Added', 'success', 'growl-top-right');
                alertify.success('Successfully Added');
                // FlowRouter.go('subject');
            },
            onError(formType, error){
                alertify.error(error.message);
                //Bert.alert(error.message, 'danger', 'growl-top-right');
            }
        },
        subjectUpdate:{//id autoform
            // before:{
            //     update(doc){
            //         return doc;
            //     }
            //
            // },
            onSuccess(formType, id){
                //Bert.Alert('Successfully Added', 'success', 'growl-top-right');

                alertify.success('Successfully Added');
                alertify.subject().close();
            },
            onError(formType, error){
                alertify.error(error.message);
                //Bert.alert(error.message, 'danger', 'growl-top-right');
            }
        }
    }
);
