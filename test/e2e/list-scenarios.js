'use strict';

describe('metalist, list scenarios', function() {

  beforeEach(function() {
    browser.get('index.html#/');
  });


  it('should check if logo is displayed', function() {

    /*then*/
    expect(element.all(by.css('.logo-container')).first().getText()).
    toMatch(/metalist/);
  });

  it("should check if list items are displayed", function() {

    /*then*/
    expect(element.all(by.css('.list')).count()).
    toEqual(2);
  });

  it("should add a new List item", function() {

    /*when*/
    element.all(by.css('.add-new-list')).first().sendKeys("movie").sendKeys(protractor.Key.ENTER);

    /*then*/
    expect(element.all(by.css('.list')).count()).
    toEqual(3);

    expect(element.all(by.css('.list')).last().getText()).
    toMatch("Movie");

  });


  it("should remove a list item", function() {

    /*then*/
    expect(element.all(by.css('.list')).count()).toEqual(2);

    /*when*/
    var lastListItem = element.all(by.css('.list')).last();
    lastListItem.element(by.css('.delete-list')).click();

    /*then*/
    expect(element.all(by.css('.list')).count()).
    toEqual(1);
  });

  it("should update a list item", function() {

    /*setup*/
    var lastListItem = element.all(by.css('.list')).last();

    /*when*/
    browser.actions().doubleClick(lastListItem).perform();
    lastListItem.element(by.css('.edit-list-input')).sendKeys("updated").sendKeys(protractor.Key.ENTER);

    /*then*/
    expect(element.all(by.css('.list')).last().getText()).toMatch("Updated");

  });

});