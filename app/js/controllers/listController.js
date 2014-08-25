metaList.controller('listController', ['$rootScope', '$scope', 'data',
	function($rootScope, $scope, data) {
		$scope.items = data;


		$scope.showTasks = function($index) {
			$scope.selected = $index;
		}

		// $scope.addItem = function(item) {
					
		// }
	}
])