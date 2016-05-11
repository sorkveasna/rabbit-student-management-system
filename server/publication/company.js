Meteor.publish('company', ()=>{
    let data=Collection.Company.find();
    return data;
});