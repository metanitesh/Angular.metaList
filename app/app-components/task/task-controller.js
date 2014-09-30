angular.module("metaList").controller('mlTaskCtrl', ['$scope', 'mlRouteParam', 'mlTaskService', 'mlState', function($scope, mlRouteParam, mlTaskService, mlState) {

    $scope.states = mlState.getStates();
 

    $scope.selectTask = function(taskId){
        mlRouteParam.setTaskId(taskId); 
    }

    $scope.removeTask = function(taskId){
        mlTaskService.removeTask(taskId);
    }

    $scope.addTask = function(newTaskTitle){

        var config = {
            title : newTaskTitle
        }

        mlTaskService.addTask(config);
        
        $scope.newTaskTitle="";

    }

    $scope.checkTask = function(taskId){

        mlTaskService.checkTask(taskId);
    }

}])