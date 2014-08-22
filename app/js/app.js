'use strict';

var metaList = angular.module('metaList', []);

metaList.controller('MyCtrl1', ['$rootScope', '$scope', 'data', function($rootScope, $scope, data) {
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


metaList.directive('ngEnter', function () {
	
    return function (scope, element, attrs) {
    	console.log("in")
        element.bind("keydown keypress", function (event) {

            if(event.which === 13) {
                scope.$apply(function (){
                    scope.$eval(attrs.ngEnter);
                });

                event.preventDefault();
            }
        });
    };
});



