"use strict";

angular.module("metaList").directive("displayTask", function() {

	return {
		restrict: "E",
		templateUrl: "app-components/task/display-task/ml-display-task.html",
	};

});