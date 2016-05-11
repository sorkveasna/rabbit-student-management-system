//Page Header
Template.mainLayout.helpers({
    pageHeader: function () {
        // Old Page Header (use IronRouter (with icon))
        //var header = FlowRouter.current().route.options.header;
        //return {
        //    title: s.humanize(header.title),
        //    sub: s.humanize(header.sub),
        //    icon: header.icon
        //};

        // New Page Header (use FlowRouter (no icon))
        var pageHeader = FlowRouter.getRouteName();
        if (_.isUndefined(pageHeader)) {
            return 'No Title';
        }
        else {
            return s.titleize(s.humanize(pageHeader));
        }
    }
});