var expect = require('chai').expect;
describe('load the home page', function(){
    beforeEach(function(){
        browser.url("./");
     })


    it('to show first section on load page', function(){
       
        var firstHeight = browser.getCssProperty(".accordion .accordion-item:first-child .accordion-content", "height");
       // console.log(firstHeight);
        expect(firstHeight.parsed.value).to.be.greaterThan(0);
    })

    it('should not show the content', function(){
        var secondDisplay = browser.getCssProperty(".accordion .accordion-item:nth-of-type(2) .accordion-content", "display");
        //console.log(secondDisplay);
        expect(secondDisplay.value).to.be.equal('none');

    })

    it('hide/expand content on click', function(){
        this.timeout(20000);
        browser.click(".accordion .accordion-item:nth-of-type(2) a");
        browser.pause(15000);
        var secondHeight = browser.getCssProperty(".accordion .accordion-item:nth-of-type(2) .accordion-content", "height");
        console.log(secondHeight);
        expect(secondHeight.parsed.value).to.be.greaterThan(0);

        var firstDisplay = browser.getCssProperty(".accordion .accordion-item:first-child .accordion-content", "display");
        console.log(firstDisplay);
        expect(firstDisplay.value).to.be.equal('none');
    })
})