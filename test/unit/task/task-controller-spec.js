describe("task controller", function() {

  var scope;
  var controller;

  var mlTaskServiceMock = {

    removeTask: function(taskId) {
      return;
    },
    addTask: function(listId, config) {
      return;
    },
    checkTask: function(listId, taskId) {
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
    controller("mlTaskCtrl", {
      $scope: scope,
      mlTaskService: mlTaskServiceMock

    })
  })

  it(":selectTask, should update location with given taskId", inject(function(mlRouteParam) {

    
    spyOn(mlRouteParam, 'setTaskId');

    /*when*/
    scope.selectTask(1)
    
    /*then*/
    expect(mlRouteParam.setTaskId).toHaveBeenCalledWith(1);

  }));

  it("removeTask, should remove task", function() {

    /*setup*/
    spyOn(mlTaskServiceMock, 'removeTask');

    /*when*/
    scope.removeTask(1);

    /*then*/
    expect(mlTaskServiceMock.removeTask).toHaveBeenCalledWith(1)

  });


  it("addTask, should add new task", function() {

    spyOn(mlTaskServiceMock, 'addTask');

    var config = {
      title: "get out of house"
    };

    
    scope.addTask("get out of house");

    expect(mlTaskServiceMock.addTask).toHaveBeenCalledWith(config)
    expect(scope.newTaskTitle).toEqual("");

  })

  it("checkTask, should mark task as completed", function() {
    
    /*setup*/  
    spyOn(mlTaskServiceMock, 'checkTask');

    /*when*/
    scope.checkTask(2);

    /*then*/
    expect(mlTaskServiceMock.checkTask).toHaveBeenCalledWith(2)

  })

});