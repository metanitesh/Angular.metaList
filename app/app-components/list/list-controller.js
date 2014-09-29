metaList.controller('mlListCtrl', ['$scope', 'mlRouteParam', 'mlListService', function($scope, mlRouteParam, mlListService) {

    var listIdWatcher = function() {
      return mlRouteParam.getListId();
    }

    var listIdListener = function(value) {
       $scope.activeListId = value;        
    }

    $scope.$watch(listIdWatcher, listIdListener);
    
    $scope.lists = mlListService.getLists();

    $scope.selectList = function(id) {
      mlRouteParam.setParam(id);
      $scope.enableEdit = false;
      return false;
    }

    $scope.removeList = function(id) {
      mlListService.removeListById(id);
    }

    $scope.addList = function() {

      if (!$scope.newListTitle) {
        return;
      }

      config = {}
      config.title = $scope.newListTitle;
      mlListService.addList(config);

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

      mlListService.updateListById(id, updatedListTitle);
      $scope.enableEdit = false
      
    }

}])
