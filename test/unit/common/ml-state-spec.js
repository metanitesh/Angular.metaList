describe('mlStateService', function() {

  var mockList;
  beforeEach(module('metaList'));

  beforeEach(function() {

    mockList = {
      "id": 1,
      "title": "To-Do",
      "tasks": [
        {
          "id": 11,
          "title": "clean house",
          "comments": ["after lunch", "maybe tomorrow", "doesn't look that bad"],
          "content": "it's been ages man !",
          "done": false
        },
        {
          "id": 12,
          "title": "get a haircut",
          "comments": ["will do this weekend"],
          "content": "this could be a good reason to become a monk",
          "done": true
        }]

    }
  })
  beforeEach(module(function($provide) {
    $provide.value("mlListService", {
      getListById: function() {
        return mockList
      }
    })

  }));

  it('is sane', inject(function(mlState) {

    /*then*/
    expect(mlState).toBeDefined();
  }));

  it("setCurrentList, should set current list state", inject(function(mlState) {
    /*setup*/
    var expectedState = {
      currentList: mockList,
      tasks: mockList.tasks,
      currentTask: "",
      currentContent: "",
      currentComments: ""
    }

    /*when*/
    mlState.setCurrentList(1);
    var state = mlState.getStates();

    /*then*/
    expect(state).toEqual(expectedState)

  }))

  it("setCurrentTask, should set current task state", inject(function(mlState) {
    /*setup*/
    var expectedState = {
      currentList: mockList,
      tasks: mockList.tasks,
      currentTask: mockList.tasks[1],
      currentContent: mockList.tasks[1].content,
      currentComments: mockList.tasks[1].comments
    }

    /*when*/
    mlState.setCurrentList(1);
    mlState.setCurrentTask(12);
    var state = mlState.getStates();

    /*then*/
    expect(state).toEqual(expectedState)

  }))


});