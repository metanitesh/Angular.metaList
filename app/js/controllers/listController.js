metaList.controller('listController', ['$rootScope', '$scope', 'data', function($rootScope, $scope, data) {
	$scope.items = data;

	$scope.showTasks = function(item){
		console.log("myc1", item)
		// $rootScope.$broadcast('showTasks', item);;
	}

	$scope.doSomething = function(item){
		window.alert("hello")	
		// $scope.items.push({title: item});		
	}
}])
