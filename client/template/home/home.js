// Declare state for server date time
var state = new ReactiveObj();

Template.welcome_screen.helpers({
    serverDateTime: function () {
        Meteor.setInterval(function () {
            Meteor.call('currentDate', function (error, result) {
                var dateTime = moment(result, 'YYYY-MM-DD H:mm:ss');
                var cssClass = 'teal';
                if (dateTime.day == 0 || dateTime.day() == 6) {
                    cssClass = 'warning';
                }
                var dateTimeVal = dateTime.format('dddd D, MMMM YYYY H:mm:ss');

                state.set('cssClass', cssClass);
                state.set('serverDateTime', dateTimeVal);
            });
        }, 1000);

        return {val: state.get('serverDateTime'), css: state.get('cssClass')};
    }
});
