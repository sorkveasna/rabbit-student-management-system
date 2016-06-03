Router.route('/', function () {

    this.render('welcome');

}, {
    name: 'welcome',
    title: "Welcome",
    header: {title: 'welcome', sub: '', icon: 'dashboard'},
    breadcrumb: {title: 'Welcome'}
});
