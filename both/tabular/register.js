TabularTables.Register = new Tabular.Table({
    name: "Register",
    collection: Collection.Register,
    autowidth: false,
    columnDefs:[
        {
            'width': '1px',
            'targets': 0
        }
    ],
    columns: [
        {
            title: "Action",
            tmpl: Meteor.isClient && Template.registerAction
        },
        {
            data: "_id",
            title: "ID"
        },
        {
            data: "_student",
            title: "Student Name",
            render(val){
                if (!_.isUndefined(val)) {
                    return val.latinName;
                }
                return '';
            }
        },
        {
            data: "_subject",
            title: "Subject Name",
            render(val){
                if (!_.isUndefined(val)) {
                    return val.name;
                }
                return '';
            }
        },
        {
            data: "_teacher",
            title: "Teacher Name",
            render(val){
                if (!_.isUndefined(val)) {
                    return val.name;
                }
                return '';
            }
        },
        {
            data: "regDate",
            title: "RegisterDate",
            render: function (val, type, doc) {
                if (val instanceof Date) {
                    return moment(val).format('YYYY/MM/DD');
                } else {
                    return "Never";
                }
            }
        },
        {
            data: "day",
            title: "Study Day"
        },
        {
            data: "time",
            title: "Study Time"
        },
        {
            data: "price",
            title: "Price",
            render: function (val, type, doc) {
                return numeral(val).format('$ 0,0.00');
            }
        },
        {
            data: "discount",
            title: "Discount",
            render: function (val, type, doc) {
                return numeral(val).format('$ 0,0.00');
            }
        },
        {
            data: "amount",
            title: "Amount",
            render: function (val, type, doc) {
                return numeral(val).format('$ 0,0.00');
            }
        },
        {data: "studentStatus", title: "Student Status"},
        {data: "InformationBy", title: "Information By"},
    ]
});