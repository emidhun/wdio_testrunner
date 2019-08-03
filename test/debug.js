//var assert = require('chai').assert;
//require('chai').should();
var expect = require('chai').expect;

describe('Shop CTA Button', function () {
    it('should link to the product page', function () {
        browser.url('./');

        var title = browser.getTitle()
       // assert.equal(title, 'Robot Parts Emporium');
       expect(title).to.equal('Robot Parts Emporium');
        //title.should.equal('Robot Parts Emporium');

        browser.click('.shop-callout a');
        //browser.debug();

        var productTitle = browser.getTitle()
        //assert.equal(productTitle, 'Totally Not Evil Sentient Robot - Robot Parts Emporium');
        expect(productTitle).to.equal('Totally Not Evil Sentient Robot - Robot Parts Emporium');
        //productTitle.should.equal('Totally Not Evil Sentient Robot - Robot Parts Emporium');

        var url = browser.getUrl();
        var containFile = url.includes('product-paged.html');
        //url.should.include('product-page.html', 'URL mismatch');
        expect(url).to.include('product-paged.html','URL mismatch');
        //console.log(url +'1st test')
    });
});
