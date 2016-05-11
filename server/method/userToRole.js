Meteor.methods({
    //insert
    'userToRole.insert': function(insertDoc) {
        Roles.addUsersToRoles(insertDoc.usernames, insertDoc.roles);
    },

    //Update
    'userToRole.update': function(updateDoc) {
        console.log(updateDoc);
        Roles.setUserRoles(updateDoc.$set.usernames, updateDoc.$set.roles);
    },
    //Remove
    'userToRole.remove': function (userId) {
        let roles=['Setting','Data','Report'];
        Roles.removeUsersFromRoles(userId, roles)    }
});
