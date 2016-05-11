rabbitRoutes.route('/osRpt', {
    name: "osRpt",
    action: function (params, queryParams) {
        // if(Roles.userIsInRole(Meteor.userId(),['Report'])){
            BlazeLayout.render('mainLayout', {content: "osRpt"});
        // }
        // else {
        //     FlowRouter.go('home');
        // }
    },
    breadcrumb: {
        title: 'Out Standing Report',
        parent:'home'
    }
});
rabbitRoutes.route('/osRptGen', {
    name: "osRptGen",
    action: function (params, queryParams) {
        // if(Roles.userIsInRole(Meteor.userId(),['Report'])){
            BlazeLayout.render('reportLayout', {content: "osRptGen"});
        // }
        // else {
        //     FlowRouter.go('home');
        // }
    }
});