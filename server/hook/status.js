Collection.Status.before.insert((userId, doc) => {
    doc._id = idGenerator.gen(Collection.Status, 3);
});