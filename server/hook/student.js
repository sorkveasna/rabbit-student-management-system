Collection.Student.before.insert((userId, doc) => {
    doc._id = idGenerator.gen(Collection.Student, 3);
});