Collection.Subject.before.insert((userId, doc) => {
    doc._id = idGenerator.gen(Collection.Subject, 3);
});