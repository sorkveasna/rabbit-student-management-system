rabbitRoutes.route('/register', {
    name: "register",
    action: function (params, queryParams) {
        if(Roles.userIsInRole(Meteor.userId(),['Data'])){
            BlazeLayout.render('mainLayout', {content: "register"});
        }
        else {
            FlowRouter.go('home');
        }
    },
    breadcrumb: {
        title: 'Register',
        parent:'home'
    }
});
rabbitRoutes.route('/registerInsert', {
    name: "registerInsert",
    action: function (params, queryParams) {
        if(Roles.userIsInRole(Meteor.userId(),['Data'])){
            BlazeLayout.render('mainLayout', {content: "registerInsert"});
        }
        else {
            FlowRouter.go('home');
        }
    },
    breadcrumb: {
        title: 'Register Insert',
        parent:'register'
    }
});
rabbitRoutes.route('/registerUpdate/:id', {
    name: "registerUpdate",
    action: function (params, queryParams) {
        if(Roles.userIsInRole(Meteor.userId(),['Data'])){
            BlazeLayout.render('mainLayout', {content: "registerUpdate"});
        }
        else {
            FlowRouter.go('home');
        }
    },
    breadcrumb: {
        title: 'Register Update',
        parent:'register'
    }
});