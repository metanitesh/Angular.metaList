describe('data service', function() {

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
    $provide.value("mlLocalStorgae", {
      getData: function() {
        return mockListDb
      }
    })
  }));

  it('is sane', inject(function(mlData) {

    /*then*/
    expect(mlData).toBeDefined();
  }));

  it("getList: should return collection of list", inject(function(mlData) {

    /*when*/
    var lists = mlData.getLists();

    /*then*/
    expect(lists).toEqual(mockListDb);

  }));

  it("getListById: should return list Item based on Id", inject(function(mlData){

    /*given*/
    var expectedList = mockListDb[0];

    /*when*/
    var list = mlData.getListById(1);

    /*then*/
    expect(list).toEqual(expectedList);
    
  }));

  it("removeListById: should remove list Item based on Id", inject(function(mlData){

    /*when*/
    mlData.removeListById(1); 

    /*then*/
    expect(mockListDb.length).toEqual(1); 
    expect(mockListDb[0]["title"]).not.toEqual("todo"); 

  }));

  it("UpdateListById: should update listItem based on Id", inject(function(mlData){

      mlData.updateListById(2, {
        title : "books"
      });

      expect(mockListDb[1].title).toEqual("books"); 

  }));



});