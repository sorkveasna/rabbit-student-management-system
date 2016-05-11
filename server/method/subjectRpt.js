Meteor.methods({
    subjectRpt(){
        let total = 0;
        let data = {};

        // title
        data.title = Collection.Company.findOne();

        // hearer
        data.header = new Date();

        //content
        let tempcontent = Collection.Subject.find();
        let content = [];
        tempcontent.forEach(function (obj) {
            total = total + 1;
            content.push(obj);

        });
        // footer
        data.footer = total;

        data.content = content;
        return data;

    }
});