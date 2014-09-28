describe('local storage service', function() {
  
  var initData;

  beforeEach(module('metaList'));
  
  beforeEach(function(){
    localStorage.removeItem('angularMetaListTest')
      
      initData = {title: "todo"};
  })

  it('is sane', inject(function(mlLocalStorgae) {

    /*then*/
    expect(mlLocalStorgae).toBeDefined();
  }));

  it("should create and intialize a local storage if there is none", inject(function(mlLocalStorgae){
      
      mlLocalStorgae.saveLocal("angularMetaListTest", initData);

      expect(localStorage.angularMetaListTest).toEqual("{\"title\":\"todo\"}");
  }))

  it("loadLocal, should load data from localStorage", inject(function(mlLocalStorgae){
      
      mlLocalStorgae.saveLocal("angularMetaListTest", initData);
      var expected = mlLocalStorgae.loadLocal("angularMetaListTest");


      expect(expected).toEqual({title: "todo"});
  }))

    xit('is should save data to local storage', inject(function(mlLocalStorgae) {

    mlLocalStorgae.saveLocal("angularMetaListTest");
    /*then*/
    expect().toBeDefined();
  }));

});