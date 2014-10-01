"use strict";

describe("mlListCtrl", function() {

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
      return ListDbMock;
    },
    removeListById: function() {
      return;
    },
    addList: function() {
      return;
    },
    updateListById: function() {
      return;
    }
  };

  beforeEach(module("metaList"));

  beforeEach(function() {
    inject(function($rootScope, $controller) {

      scope = $rootScope.$new();
      controller = $controller;

    });
  });

  beforeEach(function() {
    controller("mlListCtrl", {
      $scope: scope,
      mlList: mlDataServiceMock
    });
  });

  it(":lists, should setup lists in scope", function() {


    /*then*/
    expect(scope.lists).toEqual(ListDbMock);

  });

  it(":selectList, should setup active state for selected list", inject(function(mlRouteParam) {

    spyOn(mlRouteParam, "setListId");
    /*when*/

    scope.selectList(1);

    /*then*/

    expect(mlRouteParam.setListId).toHaveBeenCalledWith(1);
    expect(scope.enableEdit).toEqual(false);

  }));

  it(":removeList, should remove list from listDb", function() {

    /*setup*/
    spyOn(mlDataServiceMock, "removeListById");

    /*when*/
    scope.removeList(1);

    /*then*/
    expect(mlDataServiceMock.removeListById).toHaveBeenCalledWith(1);
  });

  it(":addList, should add new list in listDb", function() {

    /*setup*/
    spyOn(mlDataServiceMock, "addList");
    scope.newListTitle = "bucketList";

    /*when*/
    scope.addList();

    /*then*/
    expect(mlDataServiceMock.addList).toHaveBeenCalledWith({
      title: "bucketList"
    });

  });

  it(":enableEditMode, should enable edit field for selected list item", function() {

    /*when*/
    scope.enableEditField(1);

    /*then*/
    expect(scope.enableEdit).toEqual(1);
  });

  it(":stopPropagation, should stop event bubbling", function() {

    var event = {
      stopPropagation: function() {
        return;
      }
    };

    spyOn(event, "stopPropagation");
    /*when*/
    scope.stopPropagation(event);

    /*then*/
    expect(event.stopPropagation).toHaveBeenCalled();
  });

  it(":updateList, should update list title with new title on [enter]", function() {

    spyOn(mlDataServiceMock, "updateListById");

    /*when*/
    scope.updateList(1, "bucketList");

    /*then*/
    expect(mlDataServiceMock.updateListById).toHaveBeenCalledWith(1, "bucketList");

  });

});