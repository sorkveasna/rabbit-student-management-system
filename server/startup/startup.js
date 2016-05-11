Meteor.startup(function () {
    if (Meteor.users.find().count() <= 0) {
        let superId = Accounts.createUser({
            username: 'super',
            email: 'super@learn.com',
            password: 'super123'
        });
        Roles.addUsersToRoles(superId, ['Setting', 'Data', 'Report', 'super'])
    }
    if(Collection.Company.find().count() <=0){
        Collection.Company.insert({
            khName: 'មជ្ឈមណ្ឌលបណ្តុះបណ្តាល រ៉ាប៊ីត',
            khShortName: 'មបរ',
            enName: 'Rabbit Training Center',
            enShortName: 'RTC',
            khAddress: 'ភូមិរំចេក ៤ សង្កាត់រតនៈ ក្រុងបាត់ដំបង ខេត្តបាត់ដំបង',
            enAddress: 'Romchek 4 Village, Sangkat Rottanak, Krong Battamang, Battambang Province',
            telephone: '053 50 66 777'
        })
    }
});
