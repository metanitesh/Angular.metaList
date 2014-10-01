"use strict";

describe("mlTaskCtrl", function() {

  var scope;
  var controller;

  var mlTaskMock = {

    removeTask: function(taskId) {
      return;
    },
    addTask: function(listId, config) {
      return;
    },
    checkTask: function(listId, taskId) {
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
    controller("mlTaskCtrl", {
      $scope: scope,
      mlTask: mlTaskMock

    });
  });

  it(":selectTask, should update state with given taskId", inject(function(mlRouteParam) {

    
    spyOn(mlRouteParam, 'setTaskId');

    /*when*/
    scope.selectTask(1);
    
    /*then*/
    expect(mlRouteParam.setTaskId).toHaveBeenCalledWith(1);

  }));

  it("removeTask, should remove task from tasks collection", function() {

    /*setup*/
    spyOn(mlTaskMock, 'removeTask');

    /*when*/
    scope.removeTask(1);

    /*then*/
    expect(mlTaskMock.removeTask).toHaveBeenCalledWith(1);

  });


  it("addTask, should add new task to task collection", function() {

    spyOn(mlTaskMock, 'addTask');

    var config = {
      title: "get out of house"
    };

    
    scope.addTask("get out of house");

    expect(mlTaskMock.addTask).toHaveBeenCalledWith(config);
    expect(scope.newTaskTitle).toEqual("");

  });

  it("checkTask, should mark selected task as completed", function() {
    
    /*setup*/  
    spyOn(mlTaskMock, 'checkTask');

    /*when*/
    scope.checkTask(2);

    /*then*/
    expect(mlTaskMock.checkTask).toHaveBeenCalledWith(2);

  });

});