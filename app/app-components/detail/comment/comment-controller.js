angular.module("metaList").controller('mlCommentCtrl', ['$scope', 'mlState', 'mlTaskService', function($scope, mlState, mlTaskService) {

    
    $scope.states = mlState.getStates();

    $scope.addComment = function(newComment){
        
        var taskId = $scope.states.currentTask.id;

        mlTaskService.addComment(taskId, newComment);
        $scope.newComment = "";
    }
}])
