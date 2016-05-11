Meteor.methods({
    findOne: function (collectionName, selector, option) {
        selector = selector == null ? {} : selector;
        option = option == null ? {} : option;
        collectionName = eval(collectionName);
        return collectionName.findOne(selector, option);
    }
});