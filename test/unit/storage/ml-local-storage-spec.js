describe('local storage service', function() {

  var testData;

  beforeEach(module('metaList'));

  beforeEach(function() {
    localStorage.removeItem('angularMetaListTest')

    testData = {
      title: "todo"
    };
  })

  it('is sane', inject(function(mlLocalStorage) {

    /*then*/
    expect(mlLocalStorage).toBeDefined();
  }));

  it("hasLocal, should check if localStorage exist", inject(function(mlLocalStorage) {

    /*then*/
    expect(mlLocalStorage.hasLocal("angularMetaListTest")).toEqual(false)
  }))

  it("saveLocal, can save data to localStorage", inject(function(mlLocalStorage) {

    /*then*/
    expect(function() {
      mlLocalStorage.saveLocal(testData)
    }).toThrow(new Error('set storageName using setStorageName(), before fetching data'));

     /*when*/
    mlLocalStorage.setStorageName('angularMetaListTest');
    mlLocalStorage.saveLocal(testData);

    /*then*/
    expect(localStorage.angularMetaListTest).toEqual("{\"title\":\"todo\"}");
  }));

  it("loadLocal, can load data from localStorage", inject(function(mlLocalStorage) {

    /*then*/
    expect(function() {
      mlLocalStorage.loadLocal()
    }).toThrow(new Error('set storageName using setStorageName(), before fetching data'));

     /*when*/
    mlLocalStorage.setStorageName('angularMetaListTest');
    mlLocalStorage.saveLocal(testData);
    var expectedData = mlLocalStorage.loadLocal();

    /*then*/
    expect(expectedData).toEqual(testData);
  }));


});