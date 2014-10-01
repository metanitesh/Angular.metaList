'use strict';

describe('metalist, detail scenarios', function() {

  beforeEach(function() {
    browser.get('index.html#/');
  });


  it('should add comment', function() {

    /*setup*/
    element.all(by.css('.list')).first().click();
    element.all(by.css('.task-item')).first().click();
    
    /*when*/
    element(by.css('.add-comment')).sendKeys("cleaned").sendKeys(protractor.Key.ENTER);
    
    /*then*/  
    expect(element.all(by.css('.comments li')).count()).toEqual(4);
    expect(element.all(by.css('.comments li')).last().getText()).toMatch("cleaned");

  });


  it('should add comment', function() {

    /*setup*/
    element.all(by.css('.list')).first().click();
    element.all(by.css('.task-item')).first().click();
      
    /*when*/  
    element(by.css('.note')).sendKeys("updated content").sendKeys(protractor.Key.ENTER);
    element.all(by.css('.task-item')).last().click();
    element.all(by.css('.task-item')).first().click();
    

    /*then*/  
    expect(element(by.css(".note")).getAttribute('value')).toMatch(/it's been ages man !updated content/)
    
  });

 
});