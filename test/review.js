browser.addCommand("submitReview", function(email, review){
  if(email){
    browser.setValue("#review-email", email);
  }

  if(review){
    browser.setValue("#review-content", review);
  }
  browser.submitForm("#review-content");
});
var expect = require('chai').expect;
describe('The product review form', function () {
  beforeEach(function() {
    //  Go to the product page
    browser.url("/product-page.html");
  })
  it('should add a review when submitted properly', function (done) {
    browser.submitReview("email@example.com", "This is the review");  

    //  Assert that our review now appears in the list
    var hasReview = browser.isExisting(".comment=This is the review");

    expect(hasReview, "comment text exists").to.be.true;
  });
  it('should show an error message if the input is wrong', function () {
    // assert that error message isn't showing to start
    var isErrorShowing = browser.isVisible("p=There are some errors in your review.");
    expect(isErrorShowing).to.be.false;

    // submit form without entering content
    browser.submitReview();

    // assert that error message is now showing
    var isErrorShowing = browser.isVisible("p=There are some errors in your review.");
    expect(isErrorShowing).to.be.true;
  });
  it('should hide the error message when input is corrected', function () {
    // submit form without entering content
    browser.submitReview();

    // assert that error message is now showing
    var isErrorShowing = browser.isVisible("p=Please enter a valid email address.");
    expect(isErrorShowing).to.be.true;

    browser.submitReview("email@example.com");

   

    var isErrorShowing = browser.isVisible("p=Please enter a valid email address.");
    expect(isErrorShowing).to.be.false;

    browser.submitReview("email@example.com", "This is the review");  

    var isMainErrorShowing = browser.isVisible("p=There are some errors in your review.");
    var isContentErrorShowing = browser.isVisible("p=A review without text isn't much of a review.");

    expect(isMainErrorShowing).to.be.false;
    expect(isContentErrorShowing).to.be.false;

  });
  // it should focus on the first invalid input field on error
});