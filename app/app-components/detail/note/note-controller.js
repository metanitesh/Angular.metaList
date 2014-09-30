angular.module("metaList").controller('mlNoteCtrl', ['$scope', 'mlState', 'mlTaskService', function($scope, mlState, mlTaskService) {

    $scope.states = mlState.getStates();

    $scope.updateContent = function(newConent){
        var taskId = $scope.states.currentTask.id;
        mlTaskService.updateContent( taskId, newConent);
    }
    
}])
