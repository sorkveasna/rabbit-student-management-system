Meteor.publish('register', function (id) {
    //console.log(selector);

    //waiting
    Meteor._sleepForMs(1000);

    let data = Collection.Register.find({_id:id});
    return data;
});

//Global
Meteor.publish('registers', ()=> {
   let data = Collection.Register.find();
   return data;
});