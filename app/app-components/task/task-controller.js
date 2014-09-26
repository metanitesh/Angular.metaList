metaList.controller('mlTaskCtrl', ['$scope', '$location', 'mlTaskService', function($scope, $location, mlTaskService) {

    $scope.$watch(function() {
      return $location.path();
    }, function(value) {
        $scope.tasks = mlTaskService.getTasksFor(value.slice(1));        
    })

    $scope.selectTask = function(taskId){
         $location.path(taskId);
    }

    $scope.removeTask = function(taskId){

    }   

    $scope.checkTask = function(){

    }

    $scope.addTask = function(){

    }
}])