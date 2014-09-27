metaList.controller('mlTaskCtrl', ['$scope', 'mlRouteParam', 'mlTaskService', function($scope, mlRouteParam, mlTaskService) {

    $scope.$watch(function() {
      return mlRouteParam.getParam().listId;
    }, function() {
        $scope.listId = mlRouteParam.getParam().listId;
        $scope.activeTaskId = mlRouteParam.getParam().taskId;
        $scope.tasks = mlTaskService.getTasksFor(mlRouteParam.getParam().listId);        
    })

    $scope.$watch(function() {
      return mlRouteParam.getParam().taskId;
    }, function() {
        $scope.activeTaskId = mlRouteParam.getParam().taskId;
    })


    $scope.selectTask = function(taskId){
        mlRouteParam.setParam($scope.listId, taskId); 
    }

    $scope.removeTask = function(taskId){
        mlTaskService.removeTaskFrom($scope.listId, taskId);
    }

    $scope.addTask = function(newTaskTitle){
        
        var config = {
            title : newTaskTitle
        }
        
        mlTaskService.addTaskTo($scope.listId, config);
        $scope.newTaskTitle="";
    
    }

    $scope.checkTask = function(taskId){
        
        mlTaskService.checkTaskFrom($scope.listId, taskId);
    }
  
}])