//Alertify
Template.userToRole.onRendered(function () {
    // Create new  alertify
    createNewAlertify('userToRole'); //subject is name of alertify
});

//insert
Template.userToRole.events({
    'click #js-insert': function (error, result) {

        alertify.userToRole(renderTemplate(Template.userToRoleInsert))
            .set({
                title: fa('plus', ' Status')
            })
            // .maximize();
    }
});

Template.userToRoleAction.events({
    'click #js-update': function (error, result) {
        Meteor.call('findOne', 'Meteor.users', {_id: this._id}, {}, function (error, userToRole) {
            if (error) {
                Bert.alert(error.message, 'danger', 'growl-bottom-right');
            }
            else {
                alertify.userToRole(renderTemplate(Template.userToRoleUpdate, userToRole))
                    .set({
                        title: fa('edit', ' UserToRole')
                    })
                    // .maximize();
            }
        });
    },

    // 'click #js-update': function() {
    //     FlowRouter.go('userToRoleUpdate', {
    //         id: this._id
    //     });
    // },
    'click .jsRemove': function() {
        var self = this;
        alertify.confirm("Are you sure want to delete?",
            function () {
                Meteor.call('userToRole.remove',self._id, function (error, result) {
                    if (!error) {
                        alertify.success('Deleted');
                    }
                });
            },
            function () {
                alertify.error('Cancel');
            });
    },
    'click #js-show': function () {
        Meteor.call('findOne', 'Meteor.users', {_id: this._id}, {}, function (error, result) {
            if (error) {
                Bert.alert(error.message, 'danger', 'growl-bottom-right');
            }
            else {
                alertify.userToRole(renderTemplate(Template.userToRoleShow, result))
                    .set({
                        title: fa('eye', ' UserToRole')
                    });
            }
        });
    }
});

Template.userToRoleUpdate.helpers({
    userToRoleDoc: function() {
        var id = FlowRouter.getParam('id');
        var user = Meteor.users.findOne({
            _id: id
        });
        return user;
    }
});
Template.userToRole.helpers({
    selector(){
        // debugger
        if (!Roles.userIsInRole(Meteor.userId(), ['super'])) {
            return {roles: {$nin: ['super']}}
        }
        return {};
    }
});
//hook
AutoForm.hooks({
    userToRoleInsert: { //id autoform
        onSubmit: function(insertDoc, updateDoc, currentDoc) {
            this.event.preventDefault();
            Meteor.call('userToRole.insert', insertDoc);
            this.done();
        },
        onSuccess(formType, result) {
            alertify.success('Successfully Added');
        },
        onError(formType, error) {
            alertify.error(error.message);
        }
    },
    userToRoleUpdate: { //id autoform
        onSubmit: function(insertDoc, updateDoc, currentDoc) {
            this.event.preventDefault();
            var self = this;

            Meteor.call('userToRole.update', updateDoc, function(error, result) {
                if (!error) {
                    self.done();
                }
            });
        },
        onSuccess(formType, result) {
            alertify.success('Successfully Updated');
            alertify.userToRole().close();
        },
        onError(formType, error) {
            alertify.error(error.message);
        }
    }
});
