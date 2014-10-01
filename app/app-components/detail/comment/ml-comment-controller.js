"use strict";

angular.module("metaList").controller('mlCommentCtrl', ['$scope', 'mlState', 'mlTask',
	function($scope, mlState, mlTask) {
		$scope.states = mlState.getStates();

		$scope.addComment = function(newComment) {

			var taskId = $scope.states.currentTask.id;
			mlTask.addComment(taskId, newComment);
			$scope.newComment = "";
		};
	}
]);