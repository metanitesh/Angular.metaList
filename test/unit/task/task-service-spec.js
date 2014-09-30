describe('task service', function() {

  var mockListDb;

  beforeEach(function() {

    mockTasks = [{
      id: 11,
      title: "clean house",
      comments: ["will do this weekend"],
      content: "list of work",
      done: false
      }, {
      id: 12,
      title: "sleep",
      done: false
    }];

  })

  beforeEach(module('metaList'));
  beforeEach(inject(function(mlTaskService) {
    mlTaskService.setTasks(mockTasks);
  }));


  it('is sane', inject(function(mlTaskService) {

    /*then*/
    expect(mlTaskService).toBeDefined();
  }));

  it('setTasks , should set tasks object', inject(function(mlTaskService) {

    var tasks = mlTaskService.setTasks(mockTasks)
    /*then*/
    expect(tasks).toEqual(mockTasks);
  }));

  it("getTasks, can get taskItems", inject(function(mlTaskService) {

    /*when*/
    var tasks = mlTaskService.getTasks();

    /*then*/
    expect(tasks).toEqual(mockTasks);

  }));

  it("addTask:, can add new task item", inject(function(mlTaskService) {

    /*setup*/
    var newTask = {
      title: "eat"
    }

    /*when*/
    mlTaskService.addTask(newTask);

    var tasks = mockTasks;
    var lastIndex = tasks.length - 1;

    /*then*/
    expect(tasks[lastIndex].title).toEqual("eat");
    expect(tasks[lastIndex].id).toBeDefined();

  }));

  it("removeTask:, can remove task", inject(function(mlTaskService) {

    /*when*/
    mlTaskService.removeTask(11);

    /*then*/
    expect(mockTasks.length).toEqual(1);

  }))

  it("checkTaskFrom:, can update task state to done", inject(function(mlTaskService) {

    /*when*/
    mlTaskService.checkTask(11);

    /*then*/
    expect(mockTasks[0].done).toEqual(true);

  }))

  it("getTaskById:, can get task by Id", inject(function(mlTaskService) {

    /*when*/
    mlTaskService.getTaskById(11);

    /*then*/
    expect(mockTasks[0].title).toEqual("clean house");

  }))

  it("addComment:, can add new Comment to given task", inject(function(mlTaskService) {

    /*when*/
    mlTaskService.addComment(11, "done");

    /*then*/
    expect(mockTasks[0].comments.length).toEqual(2);

  }))

  it("updateContent:, should update content of given task", inject(function(mlTaskService) {

    /*when*/
    mlTaskService.updateContent(11, "new content");

    /*then*/
    expect(mockTasks[0].content).toEqual("new content");

  }))
});