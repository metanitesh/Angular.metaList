angular.module("metaList").factory('mlTaskService', ["mlData", "mlIdGenerator", function(mlData, mlIdGenerator) {

    "use strict";

    var getTaskFor = function(listId) {
      return mlData.getListById(listId).tasks;
    };

    var addTaskTo = function(listId, config) {

      if (!config.title) {
        throw "to create a new task title is required";
      }

      var newTask = {
        id: mlIdGenerator.getId(),
        title: config.title,

        done: false
      };

      var tasks = getTaskFor(listId);
      tasks.push(newTask);
    };

    var removeTaskFrom = function(listId, taskId) {
      var tasks = getTaskFor(listId);

      for (var i = tasks.length - 1; i >= 0; i--) {
        if (tasks[i]["id"] === taskId)
          tasks.splice(i, 1);
      }
    }

    var checkTaskFrom = function(listId, taskId) {
      var tasks = getTaskFor(listId);

      _.findWhere(tasks, {
        id: taskId
      }).done = true;

    }

    var getTaskById = function(listId, taskId) {
      var tasks = getTaskFor(listId);

      return _.findWhere(tasks, {
        id: taskId
      })
    }

    var addComment = function(listId, taskId, newComment){
      var task =  getTaskById(listId, taskId)
      task.comments.push(newComment);
    }
    return {
      getTasksFor: getTaskFor,
      addTaskTo: addTaskTo,
      removeTaskFrom: removeTaskFrom,
      checkTaskFrom: checkTaskFrom,
      getTaskById: getTaskById,
      addComment: addComment
    };

}]);