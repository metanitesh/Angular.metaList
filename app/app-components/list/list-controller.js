metaList.controller('mlListCtrl', ['$scope', 'mlData', function($scope, mlData) {

    $scope.lists = mlData.getLists();

    $scope.selectList = function(list) {
        $scope.selected = list.id;      
    }
    
  }
])