
Collection.Company = new Mongo.Collection('company');

Schema.Company = new SimpleSchema({
    khName: {
        type: String,
        label: 'Khmer Name',
        max: 200    },
    khShortName: {
        type: String,
        label: 'Khmer Short Name',
        max: 200
    },
    enName: {
        type: String,
        label: 'English Name',
        max: 200
    },
    enShortName: {
        type: String,
        label: 'English Short Name',
        max: 200
    },
    khAddress: {
        type: String,
        label: 'Kh address',
        max: 500
    },
    enAddress: {
        type: String,
        label: 'English Address',
        max: 500
    },
    telephone: {
        type: String,
        label: 'Telephone',
        max: 100
    },
    email: {
        type: String,
        label: 'Email',
        regEx: SimpleSchema.RegEx.Email,
        optional: true
    },
    website: {
        type: String,
        label: 'Website',
        regEx: SimpleSchema.RegEx.Url,
        optional: true
    }
});

/**
 * Attach schema
 */
Collection.Company.attachSchema(Schema.Company);