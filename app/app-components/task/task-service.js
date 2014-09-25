angular.module("metaList").factory('mlTaskService', ["mlData", "mlIdGenerator", function(mlData, mlIdGenerator) {

    "use strict";

    var getTaskFor = function(listId) {
      return mlData.getListById(listId).tasks;
    };

    var addTaskTo = function(listId, config) {

      if (!config.title) {
        throw "to create a new task title is required";
      }

   

    return {
      getTasksFor: getTaskFor,
      addTaskTo: addTaskTo,
      removeTaskFrom: removeTaskFrom
    };

}]);