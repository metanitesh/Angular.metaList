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

    return {
      getTasksFor: getTaskFor,
      addTaskTo: addTaskTo,
      removeTaskFrom: removeTaskFrom,
      checkTaskFrom: checkTaskFrom
    };

}]);