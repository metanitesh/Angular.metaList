metaList.controller('mlListCtrl', ['$scope', 'mlData', function($scope, mlData) {

    $scope.lists = mlData.getLists();


    $scope.selectList = function(id) {
      $scope.activeListId = id;
      $scope.enableEdit = false;
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

