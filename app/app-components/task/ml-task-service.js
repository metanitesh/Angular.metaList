"use strict";

angular.module("metaList").factory('mlTask', ["mlIdGenerator",
  function(mlIdGenerator) {

    var tasks;

    var setTasks = function(mlTasks) {
      tasks = mlTasks;
      return tasks;
    };

    var getTasks = function() {
      return tasks;
    };

    var addTask = function(config) {

      if (!config.title) {
        throw "to create a new task title is required";
      }

      var newTask = {
        id: mlIdGenerator.generateId(),
        title: config.title,
        comments: [],
        content: "",
        done: false
      };

      tasks.push(newTask);
    };

    var removeTask = function(taskId) {

      for (var i = tasks.length - 1; i >= 0; i--) {
        if (tasks[i].id === taskId)
          tasks.splice(i, 1);
      }
    };

    var checkTask = function(taskId) {
      getTaskById(taskId).done = true;
    };

    var getTaskById = function(taskId) {

      return _.findWhere(tasks, {
        id: taskId
      });

    };

    var addComment = function(taskId, newComment) {
      var task = getTaskById(taskId);
      task.comments.push(newComment);
    };

    var updateContent = function(taskId, newContent) {
      var task = getTaskById(taskId);
      task.content = newContent;
    };

    return {
      setTasks: setTasks,
      getTasks: getTasks,
      addTask: addTask,
      removeTask: removeTask,
      checkTask: checkTask,
      getTaskById: getTaskById,
      addComment: addComment,
      updateContent: updateContent
    };

  }
]);