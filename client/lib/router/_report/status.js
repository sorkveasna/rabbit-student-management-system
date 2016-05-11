rabbitRoutes.route('/statusRpt', {
    name: "statusRpt",
    action: function (params, queryParams) {
        // if(Roles.userIsInRole(Meteor.userId(),['Report'])){
        BlazeLayout.render('mainLayout', {content: "statusRpt"});
        // }
        // else {
        //     FlowRouter.go('home');
        // }
    },
    breadcrumb: {
        title: 'Staut Report',
        parent:'home'
    }
});
rabbitRoutes.route('/statusRptGen', {
    name: "statusRptGen",
    action: function (params, queryParams) {
        // if(Roles.userIsInRole(Meteor.userId(),['Report'])){
        BlazeLayout.render('reportLayout', {content: "statusRptGen"});
        // }
        // else {
        //     FlowRouter.go('home');
        // }
    }
});