"use strict";

describe('mlList service', function() {

  var mockListDb;

  beforeEach(function() {
    mockListDb = [{
      id: 1,
      title: "todo"
    }, {
      id: 2,
      title: "movie"
    }];

  });

  beforeEach(module('metaList'));
  beforeEach(module(function($provide) {
    $provide.value("mlStorage", {
      getData: function() {
        return mockListDb;
      }
    });
  }));

  it('is sane', inject(function(mlList) {

    /*then*/
    expect(mlList).toBeDefined();
  }));

  it("getLists: should return collection of list", inject(function(mlList) {

    /*when*/
    var lists = mlList.getLists();

    /*then*/
    expect(lists).toEqual(mockListDb);

  }));

  it("getListById: can return list Item based on Id", inject(function(mlList) {

    /*given*/
    var expectedList = mockListDb[0];

    /*when*/
    var actualList = mlList.getListById(1);

    /*then*/
    expect(actualList).toEqual(expectedList);

  }));

  it("removeListById: can remove list Item based on Id", inject(function(mlList) {

    /*when*/
    mlList.removeListById(1);

    /*then*/
    expect(mockListDb.length).toEqual(1);
    expect(mockListDb[0].title).not.toEqual("todo");

  }));

  it("UpdateListById: can update listItem based on Id", inject(function(mlList) {

    /*when*/
    mlList.updateListById(2, "books");

    /*then*/
    expect(mockListDb[1].title).toEqual("books");

    /*then*/
    expect(function() {
      mlList.updateListById(2, "");
    }).toThrow(new Error("can not update with a empty title"));



  }));


  it("addList: can add listItem to listDb", inject(function(mlList) {

    /*when*/
    mlList.addList({
      title: "grocery"
    });

    /*then*/
    expect(mockListDb.length).toEqual(3);
    expect(mockListDb[2].title).toEqual("grocery");

    /*then*/
    expect(function() {
      mlList.addList({});
    }).toThrow(new Error('to add a new list item title is required'));
  }));

});