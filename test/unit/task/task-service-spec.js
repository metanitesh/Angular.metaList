describe('task service', function() {

  var mockListDb;

  beforeEach(function() {

    mockListDb = [{
      id: 1,
      title: "todo",
      tasks: [{
        id: 11,
        title: "clean house"
        }, {
        id: 12,
        title: "sleep"
      }]
      }, {
      id: 2,
      title: "movie",
      tasks: [{
        id: 21,
        title: "batman"
        }, {
        id: 22,
        title: "harry Potter"
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

 
});