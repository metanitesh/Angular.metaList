describe("list controller", function() {

  var scope;
  var controller;

  var ListDbMock = [{
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
      return ListDbMock
    },
    removeListById: function() {
      return;
    }
  }

  beforeEach(module("metaList"));

  beforeEach(function() {
    inject(function($rootScope, $controller) {

      scope = $rootScope.$new();
      controller = $controller;

    })
  });

  beforeEach(function() {
    controller("mlListCtrl", {
      $scope: scope,
      mlData: mlDataServiceMock
    })
  })

  it(":lists, should setup lists in scope", function() {


    /*then*/
    expect(scope.lists).toEqual(ListDbMock);

  });

  it(":selectList, should apply active class to selected list item", function() {


    /*when*/
    scope.selectList(1);

    /*then*/
    expect(scope.activeListId).toEqual(1);

  })

  it(":removeList, should removeList from listDb", function() {

    /*setup*/
    spyOn(mlDataServiceMock, "removeListById")

    /*when*/
    scope.removeList(1);

    /*then*/
    expect(mlDataServiceMock.removeListById).toHaveBeenCalledWith(1);
  })
  // it("enableEditMode:, should enable edit mode for selected list item", function(){


  //   /*when*/
  //   scope.enableEditMode(mlDataMock[0]);
  //   /*then*/
  //   expect(scope.enableEdit).toEqual(1);

  // })

  // it("updateList:, should call mlDataService update method with selected list item", function(){

  //    /*setup*/
  //    var event =  {
  //     which: 13
  //    }

  //    spyOn(mlDataServiceMock, 'updateList');

  //    /*when*/
  //   scope.updateList(event, mlDataMock[0]);

  //   expect(mlDataServiceMock.updateList).toHaveBeenCalledWith(mlDataMock[0]);

  // })

});