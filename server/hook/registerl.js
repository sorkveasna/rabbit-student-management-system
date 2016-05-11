Collection.Register.before.insert((userId, doc) => {
    doc._id = idGenerator.gen(Collection.Register, 3);
});