metaList.controller('mlListCtrl', ['$scope', '$location', 'mlData', function($scope, $location, mlData) {

    $scope.lists = mlData.getLists();

    $scope.$watch(function() {
      return $location.path();
    }, function(value) {
        $scope.activeListId = value.slice(1);        
    })

    $scope.selectList = function(id) {
      $location.path(id);
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
