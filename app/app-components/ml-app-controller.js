"use strict";

angular.module('metaList').controller("mlAppController", ['$scope', "mlRouteParam", "mlState",
    function($scope, mlRouteParam, mlState) {

        var listIdWatcher = function() {
            return mlRouteParam.getListId();
        };

        var listIdListener = function(listId) {
            if (listId) {
                mlState.setCurrentList(listId);
            }
        };

        var taskIdWatcher = function() {
            return mlRouteParam.getTaskId();
        };

        var taskIdListener = function(taskId) {
            if (taskId) {
                mlState.setCurrentTask(taskId);
            }
        };

        $scope.$watch(listIdWatcher, listIdListener);
        $scope.$watch(taskIdWatcher, taskIdListener);

    }
]);