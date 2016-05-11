Collection.Teacher = new Mongo.Collection('teacher');

Schema.Teacher = new SimpleSchema({
    name: {
        type: String,
        label: "Name"
    },
    gender: {
        type: String,
        label: "Gender",
        autoform: {
            type: "select2",
            options: function () {
                return [
                    {label: '(Select One)', value: ''},
                    {label: "Male", value: 'M'},
                    {label: "Female", value: 'F'}
                ];
            }
        }
    },
    birthDate: {
        type: Date,
        label: "Date Of Birth",
        autoform: {
            type: "bootstrap-datetimepicker",
            afFieldInput: {
                dateTimePickerOptions: {
                    format: 'DD/MM/YYYY',
                    pickTime: false
                }
            }
        }
    },
    telephone: {
        type: Number,
        label: "Telephone",
        optional: true
    },
    subject: {
        type: [String],
        label: "Subject",
        autoform: {
            type: "select-multiple",
            multiple: true,
            options: function () {
                var data = Collection.Subject.find();
                var list = [];

                data.forEach(function (obj) {
                    list.push({label:obj.name, value: obj.name});
                });
                return list;
            }
        }
    },
    // day: {
    //     type: [String],
    //     label: "Day",
    //     autoform: {
    //         type: "select-multiple",
    //         options: function () {
    //             return [
    //                 {label: '(Select One)', value: ''},
    //                 {label: "Weekday", value: 'weekday'},
    //                 {label: "Weekend", value: 'weekend'}
    //             ];
    //         }
    //     }
    // },
    // time:{
    //     type: String,
    //     label: "Time"
    // }
});
Collection.Teacher.attachSchema(Schema.Teacher);