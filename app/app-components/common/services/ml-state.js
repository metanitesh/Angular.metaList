"use strict";

angular.module("metaList").factory('mlState', ["mlList", "mlTask",
  function(mlList, mlTask) {

    var states = {
      currentList: "",
      tasks: "",
      currentTask: "",
      currentContent: "",
      currentComments: ""
    };

    var setCurrentList = function(listId) {
      var currentList = mlList.getListById(listId);

      states.currentList = currentList;
      states.tasks = mlTask.setTasks(currentList.tasks);

      states.currentTask = "";
      states.currentContent = "";
      states.currentComments = "";
    };

    var getStates = function() {
      return states;
    };

    var setCurrentTask = function(taskId) {
      var currentTask = mlTask.getTaskById(taskId);
      states.currentTask = currentTask;
      states.currentContent = currentTask.content;
      states.currentComments = currentTask.comments;
    };

    return {
      setCurrentList: setCurrentList,
      setCurrentTask: setCurrentTask,
      getStates: getStates
    };

  }
]);