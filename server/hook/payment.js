Collection.Payment.before.insert((userId, doc) => {
    doc._id = idGenerator.gen(Collection.Payment, 3);
});