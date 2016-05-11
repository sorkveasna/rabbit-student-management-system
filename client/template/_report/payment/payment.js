Template.paymentRptGen.onCreated(function () {
    this.subscribe('company');
});
// Generate
Template.paymentRptGen.helpers({
    paymentRptDoc(){
        let fromDate = FlowRouter.getQueryParam('fromDate');
        let toDate = FlowRouter.getQueryParam('toDate');

        Meteor.call('paymentRpt', fromDate, toDate, function(error, reuslt){
            if(!error){
                Session.set('paymentRptResult', reuslt)
            }
        });
        return Session.get('paymentRptResult');
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
        paymentRpt: {
            onSubmit(insertDoc, updateDoc, currentDoc){
                this.done(null, insertDoc);
            },
            onSuccess(formType, result){
                let query = result;
                let path = FlowRouter.path('paymentRptGen', {}, query);

                window.open(path, '_blank');
            },
            onError(formType, error){
                alertify.error(error.message);
            }
        }
    }
);
