describe("list controller", function() {

  var scope;
  var controller;

  var mlDataMock = [{
    title: "books",
    id: 1
    }, {
    title: "movies",
    id: 2
    }, {
    title: "life",
    id: 3
  }];

  var mlDataServiceMock = {
    getLists: function() {
      return mlDataMock
    },
    updateList: function() {
      return true;
    }
  }

  beforeEach(module("metaList"));
  beforeEach(function() {
    inject(function($rootScope, $controller) {

      scope = $rootScope.$new();
      controller = $controller;

    })
  });

  beforeEach(function(){
    controller("mlListCtrl", {
      $scope: scope,
      mlData: mlDataServiceMock
    }) 
  })

  it(":lists, should setup lists in scope", function() {

    
    /*then*/
    expect(scope.lists).toEqual(mlDataMock);

  });

  it(":selectList, should apply active class to selected list item", function() {

    
   
    /*when*/
    scope.selectList(mlDataMock[0]);
    /*then*/
    expect(scope.selected).toEqual(1);

  })

  it("enableEditMode:, should enable edit mode for selected list item", function(){

    
    /*when*/
    scope.enableEditMode(mlDataMock[0]);
    /*then*/
    expect(scope.enableEdit).toEqual(1);
    
  })

  it("updateList:, should call mlDataService update method with selected list item", function(){

     /*setup*/
     var event =  {
      which: 13
     }

     spyOn(mlDataServiceMock, 'updateList');
    
     /*when*/
    scope.updateList(event, mlDataMock[0]);

    expect(mlDataServiceMock.updateList).toHaveBeenCalledWith(mlDataMock[0]);
    
  })

});