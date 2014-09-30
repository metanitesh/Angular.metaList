angular.module("metaList").controller('mlNoteCtrl', ['$scope', 'mlState', 'mlTaskService', function($scope, mlState, mlTaskService) {

    $scope.states = mlState.getStates();

    $scope.updateContent = function(newConent){
        mlTaskService.updateContent(mlState.getStates().currentTask.id, newConent);
    }
    
}])
