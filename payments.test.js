describe("Payments test (with setup and tear-down)", function() {
    beforeEach(() => {
        billAmtInput.value = 200;
        tipAmtInput.value = 40;
    });

    it('should add a new payment to allPayments on submitPaymentInfo()', () => {
        submitPaymentInfo();
        expect(Object.keys(allPayments).length).toEqual(1);
        expect(allPayments['payment1'].billAmt).toEqual('200');
        expect(allPayments['payment1'].tipAmt).toEqual('40');
        expect(allPayments['payment1'].tipPercent).toEqual(20);
    })

    it('should create a new payment on createCurPayment()', () => {
        let currentPayment = {
            billAmt: '200',
            tipAmt: '40',
            tipPercent: 20,
        };

        expect(createCurPayment()).toEqual(currentPayment);
    })

    it('should not accept a new payment with no value', () => {
        billAmtInput.value = "";
        submitPaymentInfo();
        expect(Object.keys(allPayments).length).toEqual(0);
        let curPayment = createCurPayment();
        expect(curPayment).toEqual(undefined);
    })

    it('should update the #paymentTable on appendPaymentTable()', () =>{
        let curPayment = createCurPayment();
        allPayments['payment1'] = curPayment;
        appendPaymentTable(curPayment);
        let tableList = document.querySelectorAll('#paymentTable tbody tr td')
        expect(tableList.length).toEqual(3);
        expect(tableList[0].innerText).toEqual('$200');
        expect(tableList[1].innerText).toEqual('$40');
        expect(tableList[2].innerText).toEqual('20%');

    })



    afterEach(() =>{
        allPayments = {};
        paymentId = 0;
        paymentTbody.innerHTML = "";
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
    })

})