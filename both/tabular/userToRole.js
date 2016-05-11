TabularTables.UserToRole = new Tabular.Table({
    name: "UserToRole",
    collection: Meteor.users,
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
            tmpl: Meteor.isClient && Template.userToRoleAction
        },
        {data: "_id", title: "ID"},
        {data: "username", title: "Name"},
        {data: "roles", title: "Roles"}

    ]
});