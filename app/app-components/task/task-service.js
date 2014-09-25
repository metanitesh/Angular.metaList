angular.module("metaList").factory('mlTaskService', ["mlData", "mlIdGenerator", function(mlData, mlIdGenerator) {

    "use strict";

    var getTaskFor = function(listId) {
      return mlData.getListById(listId).tasks;
    };

   

    return {
      getTasksFor: getTaskFor,
      addTaskTo: addTaskTo,
      removeTaskFrom: removeTaskFrom
    };

}]);