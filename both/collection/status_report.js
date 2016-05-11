Schema.StatusRpt = new SimpleSchema({
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
    status:{
        type: String,
        label: 'Status',
        optional: true,
        autoform: {
            type: 'select2',
            options: function () {
                return [
                    {label: 'ViewAll', value: ''},
                    {label: 'Active', value: 'Active'},
                    {label: 'Close', value: 'Close'},
                    {label: 'Suspend', value: 'Suspend'},
                    {label: 'Cancel', value: 'Cancel'}
                ];
            }
        }

    }
});
