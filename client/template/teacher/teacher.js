//Alertify
Template.teacher.onRendered(function () {
    // Create new  alertify
    createNewAlertify('teacher');
});

Template.teacherAction.events({
    'click #js-update': function (error, result) {
        Meteor.call('findOne', 'Collection.Teacher', {_id: this._id}, {}, function (error, teacher) {
            if (error) {
                Bert.alert(error.message, 'danger', 'growl-bottom-right');
            }
            else {
                alertify.teacher(renderTemplate(Template.teacherUpdate, teacher))
                    .set({
                        title: fa('edit', ' Teacher')
                    })
                    .maximize();
            }
        });
    },

    // 'click #js-update': function () {
    //     FlowRouter.go('teacherUpdate', {id: this._id});
    // },
    'click .jsRemove': function () {
        var self = this;
        alertify.confirm("Are you sure want to delete?",
            function () {
                Collection.Teacher.remove({_id: self._id}); /// remove by _id?
                alertify.success('Deleted');
            },
            function () {
                alertify.error('Cancel');
            }
        );
    },
    'click #js-show': function () {
        Meteor.call('findOne', 'Collection.Teacher', {_id: this._id}, {}, function (error, teacher) {
            if (error) {
                Bert.alert(error.message, 'danger', 'growl-bottom-right');
            }
            else {
                alertify.teacher(renderTemplate(Template.teacherShow, teacher))
                    .set({
                        title: fa('eye', ' Teacher')
                    });
            }
        });
    }

});
// Insert
Template.teacherInsert.onCreated(function () {
    this.subscribe("subjects");
});

Template.teacher.events({
    'click #js-insert': function (error, result) {

        alertify.teacher(renderTemplate(Template.teacherInsert))
            .set({
                title: fa('plus', ' Teacher')
            })
            .maximize();
    }
});

//Update
// Template.teacherUpdate.onCreated(function () {
//     let teacherId = FlowRouter.getParam("id");
//     this.subscribe("teacher", teacherId);
//     this.subscribe("subjects", teacherId);
// });
// Template.teacherUpdate.helpers({
//     teacherDoc: function () {
//         var id = FlowRouter.getParam('id');
//         var teacher = Collection.Teacher.findOne({_id: id});
//         return teacher;
//     }
// });

//Show
// Template.teacherShow.onCreated(function () {
//     this.subscribe('teachers');
// });

// Template.teacherShow.helpers({
//     data: function () {
//         return Collection.Teacher.findOne(this._id);
//     }
// });

//hook
AutoForm.hooks({
    teacherInsert: {//id autoform
        onSuccess(formType, result){
            //Bert.Alert('Successfully Added', 'success', 'growl-top-right');
            alertify.success('Successfully Added');
            // FlowRouter.go('teacher');
        },
        onError(formType, error){
            alertify.error(error.message);
            //Bert.alert(error.message, 'danger', 'growl-top-right');
        }
    },
    teacherUpdate: {//id autoform
        onSuccess(formType, result){
            console.log('success');
            //Bert.Alert('Successfully Added', 'success', 'growl-top-right');
            alertify.success('Updated');
            alertify.teacher().close();
        },
        onError(formType, error){
            console.log('error');
            alertify.error(error.message);
            //Bert.alert(error.message, 'danger', 'growl-top-right');
        }
    }
});
