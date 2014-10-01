"use strict";

describe('mlTask service', function() {

  var mockTasks;

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

  });

  beforeEach(module('metaList'));
  beforeEach(inject(function(mlTask) {
    mlTask.setTasks(mockTasks);
  }));


  it('is sane', inject(function(mlTask) {

    /*then*/
    expect(mlTask).toBeDefined();
  }));

  it('setTasks , should set tasks object for the service', inject(function(mlTask) {

    var tasks = mlTask.setTasks(mockTasks);
      /*then*/
    expect(tasks).toEqual(mockTasks);
  }));

  it("getTasks, can get taskItems", inject(function(mlTask) {

    /*when*/
    var tasks = mlTask.getTasks();

    /*then*/
    expect(tasks).toEqual(mockTasks);

  }));

  it("addTask:, can add new task item to task collection", inject(function(mlTask) {

    /*setup*/
    var newTask = {
      title: "eat"
    };

    /*when*/
    mlTask.addTask(newTask);

    var tasks = mockTasks;
    var lastIndex = tasks.length - 1;

    /*then*/
    expect(tasks[lastIndex].title).toEqual("eat");
    expect(tasks[lastIndex].id).toBeDefined();

  }));

  it("removeTask:, can remove task from task collection", inject(function(mlTask) {

    /*when*/
    mlTask.removeTask(11);

    /*then*/
    expect(mockTasks.length).toEqual(1);

  }));

  it("checkTaskFrom:, can update task state to done", inject(function(mlTask) {

    /*when*/
    mlTask.checkTask(11);

    /*then*/
    expect(mockTasks[0].done).toEqual(true);

  }));

  it("getTaskById:, can get task by Id", inject(function(mlTask) {

    /*when*/
    mlTask.getTaskById(11);

    /*then*/
    expect(mockTasks[0].title).toEqual("clean house");

  }));

  it("addComment:, can add new Comment to given task", inject(function(mlTask) {

    /*when*/
    mlTask.addComment(11, "done");

    /*then*/
    expect(mockTasks[0].comments.length).toEqual(2);

  }));

  it("updateContent:, can update content of given task", inject(function(mlTask) {

    /*when*/
    mlTask.updateContent(11, "new content");

    /*then*/
    expect(mockTasks[0].content).toEqual("new content");

  }));
});