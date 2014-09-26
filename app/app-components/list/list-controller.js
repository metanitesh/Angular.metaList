metaList.controller('mlListCtrl', ['$scope', 'mlRouteParam', 'mlData', function($scope, mlRouteParam, mlData) {

    $scope.lists = mlData.getLists();

    $scope.$watch(function() {
      return mlRouteParam.getParam().listId;
    }, function(value) {
        $scope.activeListId = mlRouteParam.getParam().listId;        
    })

    $scope.selectList = function(id) {
      mlRouteParam.setParam(id);
      $scope.enableEdit = false;
      return false;
    }

    $scope.removeList = function(id) {
      mlData.removeListById(id);
    }

    $scope.addList = function() {

      if (!$scope.newListTitle) {
        return;
      }

      config = {}
      config.title = $scope.newListTitle;
      mlData.addList(config);

      $scope.newListTitle = "";
      
    }

    $scope.enableEditField = function(id) {
      $scope.enableEdit = id;
    }

    $scope.stopPropagation = function(event) {
      event.stopPropagation();
    }

    $scope.updateList = function(id, updatedListTitle) {

      if (!updatedListTitle) {
        return;
      }

      var config = {};
      config.title = updatedListTitle;

      mlData.updateListById(id, config);
      $scope.enableEdit = false
      
    }

}])
