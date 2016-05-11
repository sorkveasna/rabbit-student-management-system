rabbitRoutes.route('/company', {
    name: 'company',
    action: function (params, queryParams) {
        if (Roles.userIsInRole(Meteor.userId(), ['Setting'])) {
            BlazeLayout.render('mainLayout', {
                content: 'company'
            });
        }
        else {
            FlowRouter.go('home');
        }
    },
    breadcrumb: {
        title: 'company',
        parent: 'home'
    }
});