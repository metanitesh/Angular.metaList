angular.module("metaList").factory('mlData', function(){
	
	"use strict";

	var bootStrapData = [{
            title : "books"
     },{
            title : "movies"
     },{
            title : "life"
     }];

	var getLists = function(){
		return bootStrapData;
	};

	return {
		getLists: getLists

	};

});
