// Config Account UI
Accounts.ui.config({
    passwordSignupFields: "USERNAME_AND_OPTIONAL_EMAIL",

    //Custom
    requestPermissions: {},
    // extraSignupFields: [
    //     {
    // fieldName: 'name',
    // fieldLabel: 'Full name',
    // inputType: 'text',
    // visible: true,
    // validate: function (value, errorFunction) {
    //     // var name = s.trim(value);
    //     var name;
    //
    //     if (!name) {
    //         errorFunction("Please write your full name");
    //         return false;
    //     } else {
    //         return true;
    //     }
    // },
    // saveToProfile: true
    // }
    // ]
});

accountsUIBootstrap3.logoutCallback = function(error) {
    if (error) console.log("Error:" + error);
    FlowRouter.go('home');
};