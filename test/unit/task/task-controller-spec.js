describe("task controller", function() {

  var scope;
  var controller;


  var listMock = {
    title: "todo",
    id: 1,
    tasks: [
      {
        "id": "6FB00942-3020-4DF7-8080-5881B4B17442",
        "title": "clean house",
        "comments": ["after lunch", "maybe tomorrow", "doesn't look that bad"],
        "content": "it's been ages man !",
        "done": true
      },
      {
        "id": "508EE1CB-1544-429F-89FE-3739154448E2",
        "title": "get a haircut",
        "comments": ["will do this weekend"],
        "content": "this could be a good reason to become a monk",
        "done": true
      },
      {
        "id": "F26660FB-C38C-4884-915E-B6F661332292",
        "title": "buy grocery",
        "comments": [],
        "content": "1. eggs\n2. apples\n3. bread \n4. wine",
        "done": false
    }]
  }


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