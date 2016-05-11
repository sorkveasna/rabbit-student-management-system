rabbitRoutes.route('/status', {
    name: "status",
    action: function (params, queryParams) {
        if(Roles.userIsInRole(Meteor.userId(),['Setting'])){
            BlazeLayout.render('mainLayout', {content: "status"});
        }
        else {
            FlowRouter.go('home');
        }
    },
    breadcrumb: {
        title: 'Status',
        parent:'home'
    }
});
// rabbitRoutes.route('/statusInsert', {
//     name: "statusInsert",
//     action: function (params, queryParams) {
//         if(Roles.userIsInRole(Meteor.userId(),['Setting'])){
//             BlazeLayout.render('mainLayout', {content: "statusInsert"});
//         }
//         else {
//             FlowRouter.go('home');
//         }
//     },
//     breadcrumb: {
//         title: 'Status Insert',
//         parent:'status'
//     },
// });
// rabbitRoutes.route('/statusUpdate/:id', {
//     name: "statusUpdate",
//     action: function (params, queryParams) {
//         if(Roles.userIsInRole(Meteor.userId(),['Setting'])){
//             BlazeLayout.render('mainLayout', {content: "statusUpdate"});
//         }
//         else {
//             FlowRouter.go('home');
//         }
//     },
//     breadcrumb: {
//         title: 'Status Update',
//         parent:'status'
//     }
// });