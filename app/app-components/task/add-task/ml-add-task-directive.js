"use strict";

angular.module("metaList").directive("addTask", function() {

	return {
		restrict: "E",
		templateUrl: "app-components/task/add-task/ml-add-task.html",
	};

});