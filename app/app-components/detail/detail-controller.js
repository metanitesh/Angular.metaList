metaList.controller('mlDetailCtrl', ['$scope', 'mlRouteParam', 'mlTaskService', function($scope, mlRouteParam, mlTaskService) {

    $scope.$watch(function() {
      return mlRouteParam.getParam().taskId;
    }, function() {
        $scope.listId =  mlRouteParam.getParam().listId;
        $scope.taskId =  mlRouteParam.getParam().taskId;
        $scope.task = mlTaskService.getTaskById(mlRouteParam.getParam().listId, mlRouteParam.getParam().taskId);
        $scope.contentText=  $scope.task.content
    })

     $scope.addComment = function(newComment){
        mlTaskService.addComment($scope.listId, $scope.taskId, newComment);
        $scope.newComment = "";
    }    

    $scope.updateContent = function(newConent){
        mlTaskService.updateContent($scope.listId, $scope.taskId, newConent);
    }
}])
