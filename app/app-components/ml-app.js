'use strict';

angular.module('metaList', ['ngRoute']).run(["mlStorage",
	function(mlStorage) {

		mlStorage.setDbName("angular.MetaList");
		mlStorage.init();
		angular.element(".loader").hide();

	}
]);