'use strict';

describe('metalist, task scenarios', function() {

  beforeEach(function() {
    browser.get('index.html#/');
  });


  it('should display tasks for list item', function() {

    /*when*/
    element.all(by.css('.list')).first().click();
    
    /*then*/  
    expect(element.all(by.css('.task-item')).count()).toEqual(3);
    expect(element.all(by.css('.task-item')).first().getText()).toMatch("clean house");

  });

  it("should add a new task to task collection", function(){

    /*setup*/
    element.all(by.css('.list')).first().click();
    
    /*when*/
    element(by.css('.add-task')).sendKeys("write metalist").sendKeys(protractor.Key.ENTER);

    /*then*/
    expect(element.all(by.css('.task-remaining li')).count()).toEqual(3);

  });

  it("should mark task as done", function(){
    
    /*setup*/  
    element.all(by.css('.list')).first().click();
    var firstTask = element.all(by.css('.task-remaining .task-item')).first();

    /*when*/
    firstTask.element(by.css('.check-task')).click();

    /*then*/  
    expect(element.all(by.css('.task-remaining li')).count()).toEqual(1);
    expect(element.all(by.css('.task-complete li')).count()).toEqual(2);


  });

  it("should remove a task item", function(){

   /*setup*/ 
    element.all(by.css('.list')).first().click();
    var firstTask = element.all(by.css('.task-remaining .task-item')).first();

    /*when*/
    firstTask.element(by.css('.delete-task')).click();
    
    /*then*/  
    expect(element.all(by.css('.task-remaining li')).count()).toEqual(1);

  });

  it("should display content and comments for selected task", function(){
    
    /*setup*/
    element.all(by.css('.list')).first().click();
    
    /*when*/
    element.all(by.css('.task-item')).first().click();

    /*then*/
    expect(element(by.css(".note")).getAttribute('value')).toMatch(/it's been ages man !/)
    expect(element.all(by.css('.comments li')).count()).toEqual(3);

   
  })

});