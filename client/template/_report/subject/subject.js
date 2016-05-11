Template.subjectRptGen.helpers({
    data(){
        Meteor.call('subjectRpt', function (error, result) {
            if (!error) {
                Session.set('subjectRptResult', result);
            }
            else {
                Bert.alert(error.message, 'danger', 'growl-button-right');
            }
        });
        return Session.get('subjectRptResult');
    },
    no(index){
        return index + 1;
    }
});

// Generate
// Template.subjectRptGen.onCreated(function () {
//     this.subscribe('subjects');
//     this.subscribe('company');
// });
// Template.subjectRptGen.helpers({
//     data(){
//         return Collection.Subject.find({},{sort: {_id:1}});
//     },
//     company(){
//         return Collection.Company.find();
//     },
//     date(){
//       return Date();
//     },
//     no(index) {
//         console.log(index);
//         return index + 1;
//     }
//
// });

//hook
// AutoForm.hooks({
//         subjectRpt: {
//             onSubmit(insertDoc, updateDoc, currentDoc){
//                 this.done(null, insertDoc);
//                 return false;
//             },
//             onSuccess(formType, result){
//                 let query = result;
//                 let path = FlowRouter.path('subjectRptGen', {}, query);
//
//                 window.open(path, '_blank');
//             },
//             onError(formType, error){
//                 alertify.error(error.message);
//             }
//         }
//     }
// );
