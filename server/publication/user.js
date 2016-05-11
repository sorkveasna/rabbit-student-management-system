Meteor.publish('user', function () {
    let data = Meteor.users.find();
    return data;
});
