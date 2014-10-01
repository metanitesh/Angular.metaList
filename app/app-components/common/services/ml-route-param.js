"use strict";

angular.module("metaList").factory('mlRouteParam', ["$location",
  function($location) {

    var getListId = function() {
      return $location.path().split("/")[1];
    };

    var getTaskId = function() {
      return $location.path().split("/")[2];
    };

    var setListId = function(listId) {
      var str = "/" + listId;
      $location.path(str);
    };

    var setTaskId = function(taskId) {
      var str = "/";
      str += getListId();
      str += "/";
      str += taskId;
      $location.path(str);
    };


    return {

      getListId: getListId,
      getTaskId: getTaskId,
      setListId: setListId,
      setTaskId: setTaskId,
    };
  }
]);