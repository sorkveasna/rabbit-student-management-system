Schema.RegisterRpt = new SimpleSchema({
    fromDate: {
        type: Date,
        label: "From Date",
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
    toDate: {
        type: Date,
        label: "To Date",
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
    subject:{
        type: String,
        label: 'Subject',
        optional : true,
        autoform: {
            type: "select2"
        }
    },
    day:{
        type: String,
        label: 'Day',
        optional : true,
        autoform: {
            type: "select2"
        }
    }

});
