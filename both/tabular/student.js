TabularTables.Student = new Tabular.Table({
    name: "Student",
    collection: Collection.Student,
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
            tmpl: Meteor.isClient && Template.studentAction
        },
        {data: "_id", title: "ID"},
        {data: "khmerName", title: "Khmer Name"},
        {data: "latinName", title: "Latin Name"},
        {data: "gender", title: "Gender"},
        {
            data: "birthDate",
            title: "Date Of Birth",
            render: function (val, type, doc) {
                if (val instanceof Date) {
                    return moment(val).format('YYYY/MM/DD');
                } else {
                    return "Never";
                }
            }
        },
        {data: "maritalStatus", title: "Marital Status"},
        {data: "telephone", title: "Telephone"},
        {data: "email", title: "Email"},
        {
            data: "currentAddress",
            title: "Current Address",
            render(val){
                if (!_.isUndefined(val)) {
                    return val.numberHouse + ', ' +
                        val.groupHouse + ', ' +
                        val.village + ', ' +
                        val.commune + ', ' +
                        val.district + ', ' +
                        val.province
                        ;
                }
                return '';
            }

        },
        {
            data: "emergencyContact",
            title: "Emergency Contact",
            render(val){
                if (!_.isUndefined(val)) {
                    return val.name + ', ' +
                        val.gender + ', ' +
                        val.relation + ', ' +
                        val.telephone + ', ' +
                        val.email
                        ;
                }
                return '';
            }

        },
    ]
});