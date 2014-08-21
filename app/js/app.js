'use strict';

var myApp = angular.module('myApp', []);

myApp.provider('data', {
	$get: function(){
		return [{
		title: "bucketList",
		id: 1,
		tasks: [{
			title: "play soccer for world league",
			id: 1,
			done: false,
			comments: ["fifa 2014 is about to start", "need to go buy a Brazil T-shirt"]
		}, {
			title: "start a school",
			id: 2,
			done: true,
			comments: ["start with being a mentor"]
		}]
	}, {
		title: "to-do",
		id: 2,
		tasks: [{
			title: "create a todo App",
			id: 1,
			done: false,
			comments: []
		}, {
			title: "watch GOT",
			id: 2,
			done: false,
			comments: ["whitewalkers seems to be in no hurry"]
		}]
	}];
	}
})

myApp.controller('MyCtrl1', ['$rootScope', '$scope', 'data', function($rootScope, $scope, data) {
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


myApp.directive('ngEnter', function () {
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



