var expect = require('chai').expect;
describe('cart functionality', function(){
    beforeEach(function(){
        browser.url('/product-page.html');

    })

    it('only let to buy after setting quandity', function(){

        var isButtenEnabled = browser.isEnabled('#buyNowButton');
        expect(isButtenEnabled, "buy now should be desabled @begin").to.be.false;

        browser.setValue('#qty',10);

        var isButtenEnabled = browser.isEnabled('#buyNowButton');
        expect(isButtenEnabled, "buy now should be desabled ").to.be.true;
    })

    describe('checkout process', function(){
        beforeEach(function(){
            browser.setValue('#qty', 10);
            browser.click('#buyNowButton');
        })

        it("should be disable buy now button during processing",function(){

            var isButtenEnabled = browser.isEnabled('#buyNowButton');
            expect(isButtenEnabled, "buy now should be desabled @ processing").to.be.false;

            var isButtenEnabledText = browser.getText('#buyNowButton')
            expect(isButtenEnabledText, "verify  'buy now' text changed").to.contain("Purchasing.");
           // expect(btnText, "Verify 'buy now' text has changed").to.contain("Purchasing");
            

        })


        it('should show a thank you message with qty and type', function () {
            var thankYou = ".callout*=Thank you human";
      
            // waitForExist "thank you message"
            browser.waitForExist(thankYou, 3000);
      
            // verify is has proper qty and type
            var thankText = browser.getText(thankYou);
            expect(thankText).to.contain("10 T-800 Model 101");
          });
      
          it('should clear input after completion', function () {
            // waitForValue for qty input
            browser.waitForValue('#qty', 3000, true);
          });

        it('should hide thank you message after clicking close button', function () {
            var thankYou = ".callout*=Thank you human";
            // waitForExist "thank you message"
      browser.waitForExist(thankYou, 3000);

      // Click close button
      browser.click(".close-button");

      // use "reverse" flag to wait for it to disappear
      browser.waitForVisible(thankYou, 3000, true);
    });
  })
});
