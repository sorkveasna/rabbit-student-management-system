Template.osRptGen.onCreated(function () {
    this.subscribe('company');
});
// Generate
Template.osRptGen.helpers({
    osRptDoc(){
        let asAt = FlowRouter.getQueryParam('asAt');
        Meteor.call('outStandingRpt', asAt, function(error, result){
          if(!error){
                Session.set('outStandingRptResult', result);
            }
        });
        return Session.get('outStandingRptResult');
    },
    company(){
        return Collection.Company.find();
    },
    no(index){
        console.log(index);
        return index + 1;
    }
});

//hook
AutoForm.hooks({
        osRpt: {
            onSubmit(insertDoc, updateDoc, currentDoc){
                this.done(null, insertDoc);
            },
            onSuccess(formType, result){
                let query = result;
                let path = FlowRouter.path('osRptGen', {}, query);

                window.open(path, '_blank');
            },
            onError(formType, error){
                alertify.error(error.message);
            }
        }
    }
);
