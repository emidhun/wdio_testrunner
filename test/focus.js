var expect = require('chai').expect;
describe("review focus-", function(){
    beforeEach(function(){
        browser.url("/product-page.html");
    })

    it('should focus if 1st input is error', function(){

        var emailHasFocus = browser.hasFocus('#review-email');
        expect(emailHasFocus, "email should not have focus").to.be.false;

        browser.submitForm('form')

        var emailHasFocus = browser.hasFocus('#review-email');
        expect(emailHasFocus, "email has focus now").to.be.true;
    })

    it('email entered corrcet', function(){

        browser.setValue('#review-email', 'me@email.com');
        browser.submitForm('form');
        var reviewHasFocus = browser.hasFocus('#review-content');
        expect(reviewHasFocus, "review should be focused").to.be.true;

    })


})