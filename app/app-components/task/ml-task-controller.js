"use strict";

angular.module("metaList").controller('mlTaskCtrl', ['$scope', 'mlRouteParam', 'mlTask', 'mlState', function($scope, mlRouteParam, mlTask, mlState) {

    $scope.states = mlState.getStates();
 

    $scope.selectTask = function(taskId){
        mlRouteParam.setTaskId(taskId); 
    };

    $scope.removeTask = function(taskId){
        mlTask.removeTask(taskId);
    };

    $scope.addTask = function(newTaskTitle){

        var config = {
            title : newTaskTitle
        };

        mlTask.addTask(config);
        
        $scope.newTaskTitle="";

    };

    $scope.checkTask = function(taskId){

        mlTask.checkTask(taskId);
    };

}]);