angular.module("metaList").controller('mlCommentCtrl', ['$scope', 'mlState', 'mlTaskService', function($scope, mlState, mlTaskService) {

    
    $scope.states = mlState.getStates();

    $scope.addComment = function(newComment){
        mlTaskService.addComment(mlState.getStates().currentTask.id, newComment);
        $scope.newComment = "";
    }
}])
