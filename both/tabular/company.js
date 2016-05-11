
//
// TabularTables.Company = new Tabular.Table({
//     name: 'Company',
//     collection: Collection.Company,
//     responsive: true,
//     autoWidth: false,
//     columnDefs: [
//         {
//             'width': '1px',
//             'targets': 0
//         }
//     ],
//     columns: [
//         {
//             title: fa('bars'), //custom columns
//             tmpl: Meteor.isClient && Template.companyAction
//         },
//         {
//             data: '_id',
//             title: 'ID'
//         },
//         {
//             data: 'khName',
//             title: 'Kh Name'
//         },
//         {
//             data: 'khShortName',
//             title: 'Kh Short Name'
//         },
//         {
//             data: 'enName',
//             title: 'En Name'
//         },
//         {
//             data: 'enShortName',
//             title: 'En Short Name'
//         },
//         {
//             data: 'khAddress',
//             title: 'Kh Address'
//         },
//         {
//             data: 'enAddress',
//             title: 'User Name'
//         },
//         {
//             data: 'telephone',
//             title: 'Telephone'
//         },
//         {
//             data: 'email',
//             title: 'Email'
//         },
//         {
//             data: 'website',
//             title: 'Website'
//         }
//     ]
// });