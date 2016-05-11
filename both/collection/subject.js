Collection.Subject = new Mongo.Collection('subject');
Schema.Subject = new SimpleSchema({
    name: {
        type: String,
        label: "Name"
    },
    duration: {
        type: String,
        label: "Duration"
    },
    price: {
        type: Number,
        label: "Price",
        autoform: {
            type: "inputmask",
            afFieldInput: {
                inputmaskOptions: inputmaskOptions.currency()
            }
        }

    },
    description: {
        type: String,
        label: "Description",
        optional: true,
        autoform: {
            afFieldInput: {
                type: 'summernote',
                class: 'editor',
                settings: {
                    height: 130,
                    placeholder:'Text here',
                    toolbar: [
                        //[groupname, [button list]]
                        ['style', ['bold', 'italic', 'underline']],
                        ['font', ['strikethrough']],
                        ['fontsize', ['fontsize']],
                        ['color', ['color']],
                        ['para', ['ul', 'ol', 'paragraph']],
                        ['misc', ['fullscreen']]
                    ]
                }
            }
        }
    }
});
Collection.Subject.attachSchema(Schema.Subject);