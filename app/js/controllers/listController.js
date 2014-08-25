metaList.controller('listController', ['$rootScope', '$scope', 'data',
	function($rootScope, $scope, data) {
		$scope.items = data;


		$scope.showTasks = function($index) {
			$scope.selected = $index;
		}

		$scope.deleteTask = function($index) {
			$scope.items.splice($index, 1);
		}

		$scope.addItem = function(item) {
			
			var newItem = {
				title: $scope.newItemTitle,
				id: Math.random(),
				tasks: []
			}

			$scope.items.push(newItem);
			$scope.newItemTitle = '';
		}
	}
])