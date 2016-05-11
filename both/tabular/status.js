TabularTables.Status = new Tabular.Table({
    name: "Status",
    collection: Collection.Status,
    // autowidth: false,
    // columnDefs:[
    //     {
    //         'width': '1px',
    //         'targets': 0
    //     }
    // ],
    columns: [
        {
            title: "Action",
            tmpl: Meteor.isClient && Template.statusAction
        },
        {data: "_id", title: "ID"},
        {
            data: "statusDate",
            title: "Status Date",
            render: function (val, type, doc) {
                if (val instanceof Date) {
                    return moment(val).format('YYYY/MM/DD');
                } else {
                    return "Never";
                }
            }
        },
        {
            data: "status",
            title: "Status",
            render(val){
                if (!_.isUndefined(val)) {
                    if (val == 'Active'){
                        return "<span class='label label-success'>" + val + "</span>"
                    }
                    if (val == 'Close'){
                        return "<span class='label label-default'>" + val + "</span>"
                    }
                    if (val == 'Suspend'){
                        return "<span class='label label-primary'>" + val + "</span>"
                    }
                    if (val == 'Cancel'){
                        return "<span class='label label-warning'>" + val + "</span>"
                    }
                }
                else {
                    return 'Never';
                }
            }
        },
        {
            data: "description",
            title: "Description"
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
            data: "registerId",
            title: "Register Id"
        }
    ]
});