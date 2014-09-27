metaList.controller('mlDetailCtrl', ['$scope', 'mlRouteParam', 'mlTaskService', function($scope, mlRouteParam, mlTaskService) {

    $scope.$watch(function() {
      return mlRouteParam.getParam().taskId;
    }, function() {
        
        $scope.task = mlTaskService.getTaskById(mlRouteParam.getParam().listId, mlRouteParam.getParam().taskId);
        
    })

    

}])
