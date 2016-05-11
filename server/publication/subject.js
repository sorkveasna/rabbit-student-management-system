//static
Meteor.publish('subject', function (id) {
    //waiting
    Meteor._sleepForMs(1000);

    let data = Collection.Subject.find({_id: id});
    return data;
});
//Global
Meteor.publish('subjects', ()=>{
  let data=Collection.Subject.find();
   return data;
});