

angular.module("metaList").factory('mlData', function(){
	
	"use strict";

	var bootStrapData = [{
            title : "books"
     }];

	var getLists = function(){
		return bootStrapData;
	};

	return {
		getLists: getLists
	}
});
