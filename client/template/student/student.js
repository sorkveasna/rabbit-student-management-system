//Alertify
Template.student.onRendered(function () {
    // Create new  alertify
    createNewAlertify('student');
});

//insert
Template.student.events({
    'click #js-insert': function (error, result) {

        alertify.student(renderTemplate(Template.studentInsert))
            .set({
                title: fa('plus', ' Student')
            })
            .maximize();
    }
});

Template.studentAction.events({
    'click #js-update': function (error, result) {
        Meteor.call('findOne', 'Collection.Student', {_id: this._id}, {}, function (error, student) {
            if (error) {
                Bert.alert(error.message, 'danger', 'growl-bottom-right');
            }
            else {
                alertify.student(renderTemplate(Template.studentUpdate, student))
                    .set({
                        title: fa('edit', ' Student')
                    })
                    .maximize();
            }
        });
    },

    // 'click #js-update': function () {
    //     FlowRouter.go('studentUpdate', {id: this._id});
    // },
    'click .jsRemove': function (error, result) {
        var self = this;
        alertify.confirm("Are you sure want to delete?",
            function () {
                Collection.Student.remove({_id: self._id});
                alertify.success('Deleted');
            },
            function () {
                alertify.error('Cancel');
            });
    },
    'click #js-show': function () {
        Meteor.call('findOne', 'Collection.Student', {_id: this._id}, {}, function (error, student) {
            if (error) {
                Bert.alert(error.message, 'danger', 'growl-bottom-right');
            }
            else {
                alertify.student(renderTemplate(Template.studentShow, student))
                    .set({
                        title: fa('eye', ' Student')
                    });
            }
        });
    }

});
//Update
// Template.studentUpdate.onCreated(function () {
//     let studentId = FlowRouter.getParam("id");
//     this.subscribe("student", studentId);
// });

// Template.studentUpdate.helpers({
//     studentDoc: function () {
//         var studentId = FlowRouter.getParam('id');
//         var student = Collection.Student.findOne(studentId);
//         return student;
//     }
// });

//Show
// Template.studentShow.onCreated(function () {
//     this.subscribe('students');
// });

Template.studentShow.helpers({
    // data: function () {
    //     return Collection.Student.findOne(this._id);
    // },
    currentAddress: function () {
        var str = "<table><thead>" +
            "<tr>" +
            "<th>House Number :<th>" +
            '<td>' + this.currentAddress.numberHouse + '<td>' + "<br>" +
            "<tr>" +

            "<tr>" +
            "<th>Group Number :<th>" +
            '<td>' + this.currentAddress.groupHouse + '<td>' + "<br>" +
            "<tr>" +

            "<tr>" +
            "<th>Village :<th>" +
            '<td>' + this.currentAddress.village + '<td>' + "<br>" +
            "<tr>" +

            "<tr>" +
            "<th>Commune :<th>" +
            '<td>' + this.currentAddress.commune + '<td>' + "<br>" +
            "<tr>" +

            "<tr>" +
            "<th>District :<th>" +
            '<td>' + this.currentAddress.district + '<td>' + "<br>" +
            "<tr>" +

            "<tr>" +
            "<th>Province :<th>" +
            '<td>' + this.currentAddress.province + '<td>' + "<br>" +
            "<tr>" +

            "</thead><tbody>";
        str += '<tr>' +
            '</tr>';
        str += "</tbody></table>";
        return new Spacebars.SafeString(str);
    },
    emergencyContact: function () {
        var str = "<table><thead>" +

            "<tr>" +
            "<th>Name :<th>" +
            '<td>' + this.emergencyContact.name + '<td>' + "<br>" +
            "<tr>" +

            "<tr>" +
            "<th>Gender :<th>" +
            '<td>' + this.emergencyContact.gender + '<td>' + "<br>" +
            "<tr>" +

            "<tr>" +
            "<th>Relation :<th>" +
            '<td>' + this.emergencyContact.relation + '<td>' + "<br>" +
            "<tr>" +

            "<tr>" +
            "<th>Telephone :<th>" +
            '<td>' + this.emergencyContact.telephone + '<td>' + "<br>" +
            "<tr>" +

            "<tr>" +
            "<th>Email :<th>" +
            '<td>' + this.emergencyContact.email + '<td>' + "<br>" +
            "<tr>" +
                
            "</thead><tbody>";
        str += '<tr>' +
            '</tr>';
        str += "</tbody></table>";
        return new Spacebars.SafeString(str);
    }
});

//hook
AutoForm.hooks({
    studentInsert: {//id autoform
        onSuccess(formType, id){
            //Bert.Alert('Successfully Added', 'success', 'growl-top-right');
            alertify.success('Successfully Added');
            // FlowRouter.go('student');
        },
        onError(formType, error){
            alertify.error(error.message);
            //Bert.alert(error.message, 'danger', 'growl-top-right');
        }
    },

    studentUpdate: {//id autoform
        onSuccess(formType, id){
            //Bert.Alert('Successfully Added', 'success', 'growl-top-right');
            alertify.success('Successfully Added');
            alertify.student().close();
        },
        onError(formType, error){
            alertify.error(error.message);
            //Bert.alert(error.message, 'danger', 'growl-top-right');
        }
    }
});


