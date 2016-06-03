/** Collection @type {Mongo.Collection} */
Files = new FS.Collection("file.js.js", {
    stores: [new FS.Store.GridFS("filesStore", {})]
});

// // Files security
// Files.allow({
//     insert: function (userId, doc) {
//         return true;
//     },
//     update: function(userId, doc, fieldNames, modifier){
//         return true;
//     },
//     download: function (userId) {
//         return true;
//     }
// });


