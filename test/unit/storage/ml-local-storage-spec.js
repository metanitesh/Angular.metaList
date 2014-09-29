describe('local storage service', function() {

  var testData;

  beforeEach(module('metaList'));

  beforeEach(function() {
    localStorage.removeItem('angularMetaListTest')

    testData = {
      title: "todo"
    };
  })

  it('is sane', inject(function(mlLocalStorgae) {

    /*then*/
    expect(mlLocalStorgae).toBeDefined();
  }));

  it("hasLocal, should check if localStorage exist", inject(function(mlLocalStorgae) {

    /*then*/
    expect(mlLocalStorgae.hasLocal("angularMetaListTest")).toEqual(false)
  }))

  it("saveLocal, can save data to localStorage", inject(function(mlLocalStorgae) {

    /*then*/
    expect(function() {
      mlLocalStorgae.saveLocal(testData)
    }).toThrow(new Error('set storageName using setStorageName(), before fetching data'));

     /*when*/
    mlLocalStorgae.setStorageName('angularMetaListTest');
    mlLocalStorgae.saveLocal(testData);

    /*then*/
    expect(localStorage.angularMetaListTest).toEqual("{\"title\":\"todo\"}");
  }));

  it("loadLocal, can load data from localStorage", inject(function(mlLocalStorgae) {

    /*then*/
    expect(function() {
      mlLocalStorgae.loadLocal()
    }).toThrow(new Error('set storageName using setStorageName(), before fetching data'));

     /*when*/
    mlLocalStorgae.setStorageName('angularMetaListTest');
    mlLocalStorgae.saveLocal(testData);
    var expectedData = mlLocalStorgae.loadLocal();

    /*then*/
    expect(expectedData).toEqual(testData);
  }));


});