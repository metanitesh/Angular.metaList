describe('task service', function() {

  var mockListDb;

  beforeEach(function() {

    mockListDb = [{
      id: 1,
      title: "todo",
      tasks: [{
        id: 11,
        title: "clean house",
        comments: ["will do this weekend"],
        content: "list of work",
        done:false
        }, {
        id: 12,
        title: "sleep",
        done:false
      }]
      }, {
      id: 2,
      title: "movie",
      tasks: [{
        id: 21,
        title: "batman",
        done:false
        }, {
        id: 22,
        title: "harry Potter",
        done:false
      }]
      }
    ];

  })

  beforeEach(module('metaList'));

  beforeEach(module(function($provide) {
    $provide.value("mlLocalStorgae", {
      getData: function() {
        return mockListDb
      }
    })
  }));

  it('is sane', inject(function(mlTaskService) {

    /*then*/
    expect(mlTaskService).toBeDefined();
  }));

  it("getTasksFor:, should get all the taskItems for listId", inject(function(mlTaskService){

    /*when*/
    var tasks = mlTaskService.getTasksFor(1);

    /*then*/
    expect(tasks).toEqual(mockListDb[0].tasks);

  }));

  it("addTaskTo:, should add a task item to given listId", inject(function(mlTaskService){

    /*setup*/
    var newTask = {
      title: "eat"
    }

    /*when*/
    mlTaskService.addTaskTo(1, newTask);

    var tasks = mockListDb[0].tasks;
    var lastIndex = tasks.length-1;

    /*then*/
    expect(tasks[lastIndex].title).toEqual("eat");
    expect(tasks[lastIndex].id).toBeDefined();

  }));

  it("removeTaskFrom:, should remove task from given listId", inject(function(mlTaskService){

      mlTaskService.removeTaskFrom(1,11);

      expect(mockListDb[0].tasks.length).toEqual(1);
      
  }))

   it("checkTaskFrom:, should remove task from given listId", inject(function(mlTaskService){

      mlTaskService.checkTaskFrom(1,11);

      expect(mockListDb[0].tasks[0].done).toEqual(true);
      
  }))

   it("getTaskById:, should get by TaskId", inject(function(mlTaskService){

      mlTaskService.getTaskById(1,11);

      expect(mockListDb[0].tasks[0].title).toEqual("clean house");
      
  }))

   it("addComment:, should add a new Comment to given task", inject(function(mlTaskService){

      mlTaskService.addComment(1, 11, "done");

      expect(mockListDb[0].tasks[0].comments.length).toEqual(2);
      
  }))

   it("updateContent:, should add content to given task", inject(function(mlTaskService){

      mlTaskService.updateContent(1, 11, "new content");

      expect(mockListDb[0].tasks[0].content).toEqual("new content");
      
  }))
});