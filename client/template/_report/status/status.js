// Template.statusRptGen.onCreated(function () {
//     this.subscribe('company');
// });

// Generate
Template.statusRptGen.helpers({
    statusRptDoc(){
        let formDate = FlowRouter.getQueryParam('fromDate');
        let toDate = FlowRouter.getQueryParam('toDate');
        let status = FlowRouter.getQueryParam('status');
        Meteor.call('statusRpt', formDate,toDate, status, function (error, result) {
            if (!error) {
                Session.set('statusRptResult', result);
            }
        });
        return Session.get('statusRptResult');
    },
    no(index){
        console.log(index);
        return index + 1;
    },
    // company(){
    //     return Collection.Company.find();
    // },
    check(status){
        if (status == 'Active') {
            return `<span class="label label-success">${status}</span>`
        }
        if (status == 'Close') {
            return `<span class="label label-default">${status}</span>`
        }
        if (status == 'Suspend') {
            return `<span class="label label-primary">${status}</span>`
        }
        if (status == 'Cancel') {
            return `<span class="label label-warning">${status}</span>`
        }
    }
});

//hook
AutoForm.hooks({
        statusRpt: {
            onSubmit(insertDoc, updateDoc, currentDoc){
                this.done(null, insertDoc);
            },
            onSuccess(formType, result){
                let query = result;
                let path = FlowRouter.path('statusRptGen', {}, query);

                window.open(path, '_blank');
            },
            onError(formType, error){
                alertify.error(error.message);
            }
        }
    }
);
