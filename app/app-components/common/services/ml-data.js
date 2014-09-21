angular.module("metaList").factory('mlData', function(){
	
	"use strict";

	var bootStrapData = [{
            title : "books",
            id: 1
     },{
            title : "movies",
            id: 2
     },{
            title : "life",
            id: 3
     }];

	var getLists = function(){
		return bootStrapData;
	};

	return {
		getLists: getLists

	};

});
