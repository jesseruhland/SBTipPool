describe("Helpers test (with setup and tear-down)", function() {
    beforeEach(() => {
        billAmtInput.value = 200;
        tipAmtInput.value = 40;
    });

    afterEach(() =>{
        allPayments = {};
        paymentId = 0;
        paymentTbody.innerHTML = "";
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
    })
})