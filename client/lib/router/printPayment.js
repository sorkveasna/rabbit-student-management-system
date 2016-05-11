rabbitRoutes.route('/printPayment/:id', {
    name: "printPayment",
    action: function (params, queryParams) {
        BlazeLayout.render('invoiceLayout', {content: "printPayment"});
    }
});
