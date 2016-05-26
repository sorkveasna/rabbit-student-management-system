Collection.Student = new Mongo.Collection('student');

Schema.Student = new SimpleSchema({
    khmerName: {
        type: String,
        label: 'Khmer Name'
    },
    latinName: {
        type: String,
        label: 'Latin Name'
    },
    gender: {
        type: String,
        label: 'Gender',
        autoform: {
            type: 'select2',
            options: function () {
                return [
                    {label: '(Select One)', value: ''},
                    {label: 'Male', value: 'M'},
                    {label: 'Female', value: 'F'}
                ];
            }
        }
    },
    birthDate: {
        type: Date,
        label: 'Date Of Birth',
        autoform: {
            type: 'bootstrap-datetimepicker',
            afFieldInput: {
                dateTimePickerOptions: {
                    format: 'DD/MM/YYYY',
                    pickTime: false
                }
            }
        }
    },
    maritalStatus: {
        type: String,
        label: 'Marital Status',
        autoform: {
            type: 'select2',
            options: function () {
                return [
                    {label: '(Select One)', value: ''},
                    {label: 'Single', value: 'single'},
                    {label: 'Married', value: 'married'}
                ];
            }
        }
    },

    telephone: {
        type: String,
        label: 'Telephone',
    },
    email: {
        type: String,
        label: 'Email',
        optional: true
    },
    currentAddress: {
        type: Object,
        optional: true
    },
    'currentAddress.numberHouse': {
        type: String
    },
    'currentAddress.groupHouse': {
        type: String
    },
    'currentAddress.village': {
        type: String
    },
    'currentAddress.commune': {
        type: String
    },
    'currentAddress.district': {
        type: String
    },
    'currentAddress.province': {
        type: String
    },
    emergencyContact: {
        type: Object,
        optional: true
    },
    'emergencyContact.name': {
        type: String
    },
    'emergencyContact.gender': {
        type: String,
        autoform: {
            type: 'select2',
            options: function () {
                return [
                    {label: '(Select One)', value: ''},
                    {label: 'Male', value: 'M'},
                    {label: 'Female', value: 'F'}
                ];
            }
        }
    },
    'emergencyContact.relation': {
        type: String
    },
    'emergencyContact.telephone': {
        type: String
    },
    'emergencyContact.email': {
        type: String
    },

    photo: {
        type: String,
        autoform: {
            afFieldInput: {
                type: 'fileUpload',
                collection: 'Files',
                accept: 'image/*'
            }
        },
        optional: true
    }
});
Collection.Student.attachSchema(Schema.Student);