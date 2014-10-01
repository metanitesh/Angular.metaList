"use strict";

angular.module("metaList").directive("list", function() {

	return {
		restrict: "E",
		replace: false,
		templateUrl: "app-components/list/ml-list.html",
		controller: 'mlListCtrl',
		scope: true
	};

});