Template.printPayment.onCreated(function () {
    this.subscribe('payments');
    this.subscribe('company');

});
Template.printPayment.helpers({
    company(){
        return Collection.Company.find();
    },
    date(){
        return Date();
    },
    data: function () {
        let paymentId = FlowRouter.getParam('id');
        return Collection.Payment.findOne({_id: paymentId});
    },
    toWords(paidAmount){
        return toWords(paidAmount);
        //  toWords(paidAmount);
        // console.log(paidAmount)
    },
    print(){
        Meteor.setTimeout(function () {
            window.print();
            window.close();
        }, 1000);
    }

});

function toWords(num) {

    var a = ['', 'មួយ ', 'ពីរ', 'បី', 'បួន ', 'ប្រាំ ', 'ប្រាំមួយ ', 'ប្រាំពីរ', 'ប្រាំបី ', 'ប្រាំបួន '];
//, 'eleven ', 'twelve ', 'thirteen ', 'fourteen ', 'fifteen ', 'sixteen ', 'seventeen ', 'eighteen ', 'nineteen '];
    var b = ['', 'ដប់ ', 'ម្ភៃ', 'សាមសិប', 'សៃសិប', 'ហាសិប', 'ហុកសិប', 'ចិតសិប', 'ប៉ែតសិប', 'កៅសិប'];


    // debugger;
    if ((num = num.toString()).length > 9) return 'overflow';
    n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
    if (!n) return;
    var str = '';
    str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + a[n[1][1]]) + 'សែន' : '';
    str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + a[n[2][1]]) + 'មឺុន ' : '';
    str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + a[n[3][1]]) + 'ពាន់' : '';
    str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + a[n[4][1]]) + 'រយ' : '';
    str += (n[5] != 0) ? ((str != '') ? '' : '') + (a[Number(n[5])] || b[n[5][0]] + a[n[5][1]]) + "" : '';
    return (str);
}
