describe('task service', function() {

  var mockListDb;

  beforeEach(function() {

    mockList = {
      id: 1,
      title: "todo",
      tasks: [{
        id: 11,
        title: "clean house",
        comments: ["will do this weekend"],
        content: "list of work",
        done: false
        }, {
        id: 12,
        title: "sleep",
        done: false
      }]
    }


  })

  beforeEach(module('metaList'));

  beforeEach(module(function($provide) {
    $provide.value("mlListService", {
      getListById: function() {
        return mockList
      }
    })
  }));

  beforeEach(inject(function(mlTaskService){
    mlTaskService.setParentListTasks(1)
  }))

  it('is sane', inject(function(mlTaskService) {

    /*then*/
    expect(mlTaskService).toBeDefined();
  }));

  xit('setParentList , should parent list', inject(function(mlTaskService) {

    var tasks = mlTaskService.setParentListTasks(1)
    /*then*/
    expect(tasks).toEqual(mockList.tasks);
  }));

  it("getTasks, should get all the taskItems", inject(function(mlTaskService){

     /*when*/
     var tasks = mlTaskService.getTasks();

     /*then*/
     expect(tasks).toEqual(mockList.tasks);

   }));

  it("addTask:, should add a task item", inject(function(mlTaskService){

    /*setup*/
    var newTask = {
      title: "eat"
    }

    /*when*/
    mlTaskService.addTask(newTask);

    var tasks = mockList.tasks;
    var lastIndex = tasks.length-1;

    /*then*/
    expect(tasks[lastIndex].title).toEqual("eat");
    expect(tasks[lastIndex].id).toBeDefined();

  }));

  it("removeTask:, should remove task", inject(function(mlTaskService){

      mlTaskService.removeTask(11);

      expect(mockList.tasks.length).toEqual(1);

  }))

   it("checkTaskFrom:, should remove task from given listId", inject(function(mlTaskService){

      mlTaskService.checkTask(11);

      expect(mockList.tasks[0].done).toEqual(true);

  }))

   it("getTaskById:, should get by TaskId", inject(function(mlTaskService){

      mlTaskService.getTaskById(11);

      expect(mockList.tasks[0].title).toEqual("clean house");

  }))

   it("addComment:, should add a new Comment to given task", inject(function(mlTaskService){

      mlTaskService.addComment(11, "done");

      expect(mockList.tasks[0].comments.length).toEqual(2);

  }))

   it("updateContent:, should update content of given task", inject(function(mlTaskService){

      mlTaskService.updateContent(11, "new content");

      expect(mockList.tasks[0].content).toEqual("new content");

  }))
});