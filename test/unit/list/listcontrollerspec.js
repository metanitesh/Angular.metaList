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
    }
  }

  beforeEach(module("metaList"));
  beforeEach(function() {
    inject(function($rootScope, $controller) {

      scope = $rootScope.$new();
      controller = $controller;

    })
  });

  it(":lists, should setup lists in scope", function() {

    /*setup*/
    controller("mlListCtrl", {
      $scope: scope,
      mlData: mlDataServiceMock
    })

    /*then*/
    expect(scope.lists).toEqual(mlDataMock);

  });

  it("should apply active class to selected list item", function() {

    /*setup*/
    controller("mlListCtrl", {
      $scope: scope,
      mlData: mlDataServiceMock
    })

    /*when*/
    scope.selectList(mlDataMock[0]);
    expect(scope.selected).toEqual(1);

  })

});