//Static
Meteor.publish('student', function (id) {
    //console.log(selector);

    //waiting
    Meteor._sleepForMs(1000);

    let data = Collection.Student.find({_id: id});
    return data;
});

Meteor.publish('students', ()=> {
    let data =Collection.Student.find();
    return data;
});

//dynamic
//Meteor.publish('student', function (selector) {
//    //console.log(selector);
//
//    //waiting
//    Meteor._sleepForMs(1000);
//
//    let data = Collection.Student.find(selector);
//    return data;
//});


