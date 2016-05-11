TabularTables.Teacher = new Tabular.Table({
    name: "Teacher",
    collection: Collection.Teacher,
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
            tmpl: Meteor.isClient && Template.teacherAction
        },
        {data: "_id", title: "ID"},
        {data: "name", title: "Name"},
        {data: "gender", title: "Gender"},
        {
            data: "birthDate",
            title: "Date Of Birth",
            render: function(val,type,doc){
                if(val instanceof Date){
                    return moment(val).format('YYYY/MM/DD');
                }else{
                    return "Never";
                }
            }
        },
        {data: "telephone", title: "Telephone"},
        {data: "subject", title: "Subject"},
        // {data: "day", title: "Day"},
        // {data: "time", title: "Time"},
        
        // {
        //     data: "_subject",
        //     title: "Subject Name",
        //     render(val){
        //         if(!_.isUndefined(val)){
        //             return val.name;
        //         }
        //         return '';
        //     }
        // },
    ]
});