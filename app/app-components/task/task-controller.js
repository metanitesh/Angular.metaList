metaList.controller('mlTaskCtrl', ['$scope', '$location', 'mlTaskService', function($scope, $location, mlTaskService) {

    $scope.$watch(function() {
      return $location.path();
    }, function(value) {
        $scope.listId = value.slice(1);
        $scope.tasks = mlTaskService.getTasksFor(value.slice(1));        
    })

    $scope.selectTask = function(taskId){
         // $location.path(taskId);
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
    // $scope.removeTask = function(taskId){
    //     tasks.removeId
    // }   

    // $scope.checkTask = function(){

    // }

    // $scope.addTask = function(){

    // }
}])