Collection.Status=new  Mongo.Collection('status');
Schema.Status=new SimpleSchema({
    statusDate:{
        type:Date,
        label:'Status Date',
        defaultValue: moment().toDate(),
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
    status:{
        type:String,
        label:'Status'
    },
    description:{
        type: String,
        label: 'Description',
        optional: true
    },
    studentId:{
        type: String,
        label: 'Stduent Id'
    },
    registerId:{
        type: String,
        label: 'Register Id'
    },
    _student: {
        type: Object,
        optional: true,
        blackbox: true
    }
});
Collection.Status.attachSchema(Schema.Status);