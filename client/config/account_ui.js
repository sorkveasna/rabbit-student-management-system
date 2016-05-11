accountsUIBootstrap3.logoutCallback = function (error) {
    if (error) console.log("Error:" + error);
    FlowRouter.go('home');
};
