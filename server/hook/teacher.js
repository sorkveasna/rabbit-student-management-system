Collection.Teacher.before.insert((userId, doc) => {
    doc._id = idGenerator.gen(Collection.Teacher, 3);
});