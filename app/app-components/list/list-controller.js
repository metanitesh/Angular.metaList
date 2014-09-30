angular.module('metaList').controller('mlListCtrl', ['$scope', 'mlRouteParam', 'mlListService', "mlState", function($scope, mlRouteParam, mlListService, mlState) {

    
    $scope.states = mlState.getStates();
    $scope.lists = mlListService.getLists();

    $scope.selectList = function(id) {
      mlRouteParam.setListId(id);
      $scope.updatedListTitle = $scope.states.currentList.title;
      $scope.enableEdit = false;
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
