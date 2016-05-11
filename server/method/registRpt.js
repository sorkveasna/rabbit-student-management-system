Meteor.methods({
    registerRpt(fromDate, toDate, subject, day){
        let data = {};
        let total = 0;

        fromDate = moment(fromDate).toDate();
        toDate = moment(toDate).toDate();

        data.header = {
            date: moment(fromDate).format('DD/MM/YYYY') + ' - ' + moment(toDate).format('DD/MM/YYYY')
        };

        let selector = {
            regDate: {$gte: fromDate, $lte: toDate}
        };
        let option = {sort: {regDate: 1}};

        let tempContent = Collection.Register.find(selector, option);

        let content = [];
        tempContent.forEach(function (obj) {
            if (obj.subjectId == subject) {
                if (obj.day == day) {
                    total += obj.amount;
                    content.push(obj);

                } else if (day == null) {
                    total += obj.amount;
                    content.push(obj);
                }
            } else if (subject == null) {
                if (obj.day == day) {
                    total += obj.amount;
                    content.push(obj);

                }
                else if (day == null) {
                    total += obj.amount;
                    content.push(obj);
                }
            }
        });

        data.footer = {total: total};
        data.content = content;
        return data;
    }
})
;