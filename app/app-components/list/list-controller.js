metaList.controller('mlListCtrl', ['$scope', 'mlData', function($scope, mlData) {

    $scope.lists = mlData.getLists()

    $scope.selectList = function(list) {

      $scope.selected = list.id;
    }

    $scope.enableEditMode = function(list) {
      $scope.enableEdit = list.id;
    }

    $scope.updateList = function(event, list) {

      if (event.which === 13) {
        mlData.updateList(list);    
      }

    }
  }
])