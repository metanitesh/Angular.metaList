describe('mlListService', function() {

  var mockListDb;

  beforeEach(function() {
    mockListDb = [{
      id: 1,
      title: "todo"
      }, {
      id: 2,
      title: "movie"
    }];

  })
  beforeEach(module('metaList'));
  beforeEach(module(function($provide) {
    $provide.value("mlStorage", {
      getData: function() {
        return mockListDb
      }
    })
  }));

  it('is sane', inject(function(mlListService) {

    /*then*/
    expect(mlListService).toBeDefined();
  }));

  it("getLists: should return collection of list", inject(function(mlListService) {

    /*when*/
    var lists = mlListService.getLists();

    /*then*/
    expect(lists).toEqual(mockListDb);

  }));

  it("getListById: should return list Item based on Id", inject(function(mlListService) {

    /*given*/
    var expectedList = mockListDb[0];

    /*when*/
    var actualList = mlListService.getListById(1);

    /*then*/
    expect(actualList).toEqual(expectedList);

  }));

  it("removeListById: should remove list Item based on Id", inject(function(mlListService) {

    /*when*/
    mlListService.removeListById(1);

    /*then*/
    expect(mockListDb.length).toEqual(1);
    expect(mockListDb[0]["title"]).not.toEqual("todo");

  }));

  it("UpdateListById: should update listItem based on Id", inject(function(mlListService) {

    /*when*/
    mlListService.updateListById(2, "books");

    /*then*/
    expect(mockListDb[1].title).toEqual("books");

    /*then*/
    expect(function() {
      mlListService.updateListById(2, "");
    }).toThrow(new Error("can not update with a empty title"));



  }));


  it("addList: should add listItem to listDb", inject(function(mlListService) {

    /*when*/
    mlListService.addList({
      title: "grocery"
    });

    /*then*/
    expect(mockListDb.length).toEqual(3);
    expect(mockListDb[2].title).toEqual("grocery");

    /*then*/
    expect(function() {
      mlListService.addList({})
    }).toThrow(new Error('to add a new list item title is required'));
  }))

});