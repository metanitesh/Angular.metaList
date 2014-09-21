metaList.controller('mlListCtrl', ['$scope', 'mlData', function($scope, mlData) {
    $scope.lists = mlData.getLists();
  }
])