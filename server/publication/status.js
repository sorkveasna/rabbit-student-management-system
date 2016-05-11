//static
Meteor.publish('status', function (id) {
    //waiting
    Meteor._sleepForMs(1000);

    let data = Collection.Status.find({_id: id});
    return data;
});
//Global
Meteor.publish('statuses', ()=>{
    let data=Collection.Status.find();
    return data;
});