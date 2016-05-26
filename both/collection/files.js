/** Collection @type {Mongo.Collection} */
Files = new FS.Collection("file.js.js", {
    stores: [new FS.Store.GridFS("filesStore", {})]
});