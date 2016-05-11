Meteor.methods({
    statusRpt(fromDate, toDate, status){
        let data = {};
        let countActive = 0;
        let countClosed = 0;
        let countSuspend = 0;
        let countCancel = 0;

        // title
        data.title = Collection.Company.findOne();
        
        fromDate = moment(fromDate).toDate(); //convert to international date
        toDate = moment(toDate).toDate(); //convert to international date


        // header
        data.header = {
            date: moment(fromDate).format('DD/MM/YYYY') + ' - ' + moment(toDate).format('DD/MM/YYYY')
        };


        // content
        let selector = {
            statusDate: {$gte: fromDate, $lte: toDate}
        };

        let option = {sort: {statusDate: 1}};
        let temp = Collection.Status.find(selector, option);
        let content = [];

        temp.forEach(function (obj) {

            if (obj.status == status) {
                if (obj.status == 'Active') {
                    countActive += 1;
                }
                if (obj.status == 'Suspend') {
                    countSuspend += 1;
                }
                if (obj.status == 'Cancel') {
                    countCancel += 1;
                }
                if (obj.status == 'Close') {
                    countClosed += 1;
                }
                
                content.push(obj);
            }
            else if (status == null) {
                if (obj.status == 'Active') {
                    countActive += 1;
                }
                if (obj.status == 'Suspend') {
                    countSuspend += 1;
                }
                if (obj.status == 'Cancel') {
                    countCancel += 1;
                }
                if (obj.status == 'Close') {
                    countClosed += 1;
                }
                content.push(obj);
            }

        });

        data.content = content;
        
        // footer
        data.footer={countActive,countClosed,countSuspend,countCancel};
        
        return data;
    }
});