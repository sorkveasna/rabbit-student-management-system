rabbitRoutes.route('/subjectRptGen', {
    name: "subjectRptGen",
    action: function (params, queryParams) {
        // if(Roles.userIsInRole(Meteor.userId(),['Report'])){
        BlazeLayout.render('reportLayout', {content: "subjectRptGen"});
        // }
        // else {
        //     FlowRouter.go('home');
        // }
    }
});