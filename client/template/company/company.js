// //################-index-###################
// //onCreated
Template.company.onCreated(function () {
    this.subscribe('company');
});
// //onRendered
Template.company.onRendered(function () {
    // Create new  alertify
    createNewAlertify('company');
});
// //helpers
Template.company.helpers({
    data() {
        return Collection.Company.findOne();
    }
});

//events
Template.company.events({
    'click #js-update': function (error, result) {
        Meteor.call('findOne', 'Collection.Company', {_id: this._id}, {}, function (error, result) {
            if (error) {
                Bert.alert(error.message, 'danger', 'growl-bottom-right');
            }
            else {
                alertify.company(renderTemplate(Template.companyUpdate, result))
                    .set({
                        title: fa('edit', ' Company')
                    });
            }
        });
    }
});


// hook------------------------------------------------------------------------------
AutoForm.hooks({
    companyUpdate: {
        onSuccess(formType, result) {
            Bert.alert('Successfully Updated', 'success', 'growl-bottom-right');
            alertify.company().close();

        },
        onError(formType, error) {
            Bert.alert(error.message, 'danger', 'growl-bottom-right');
        }
    }
});