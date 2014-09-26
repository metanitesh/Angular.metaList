describe("list controller", function() {

  var scope;
  var controller;

 
   var tasksMock = [
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
  

  var mlTaskServiceMock = {

   getTasksFor: function(id){
    return tasksMock;
   },
   removeTaskFrom: function(listId, taskId){
    return;
   },
   addTaskTo: function(listId, config){
    return;
   },
   checkTask: function(listId, taskId){
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

  it(":selectTask, should select current task", function() {


    /*then*/
    // expect(scope.lists).toEqual(ListDbMock);

  });

  it("removeTask, should remove task", function(){

    spyOn(mlTaskServiceMock, 'removeTaskFrom');

    scope.listId = 1;
    scope.removeTask(2);

    expect(mlTaskServiceMock.removeTaskFrom).toHaveBeenCalledWith(1, 2)

  });

  it("checkTask, should mark task as completed", function(){
      spyOn(mlTaskServiceMock, 'checkTask');

      scope.listId = 1;
      scope.checkTask(2);

      expect(mlTaskServiceMock.checkTask).toHaveBeenCalledWith(1, 2)

  })

  it("addTask, should add new task", function(){

      spyOn(mlTaskServiceMock, 'addTaskTo');

      var config = {
        title: "get out of house"
      };

      scope.listId = 1;
      scope.addTask("get out of house");

      expect(mlTaskServiceMock.addTaskTo).toHaveBeenCalledWith(1, config)

  })
});