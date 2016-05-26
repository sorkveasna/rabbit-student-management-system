/**
 * Created by apple on 5/26/16.
 */
// Files pub
Meteor.publish('files', function () {
    if (this.userId) {
        return Files.find();
    }
});