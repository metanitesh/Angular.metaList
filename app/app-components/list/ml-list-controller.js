"use strict";

angular.module('metaList').controller('mlListCtrl', ['$scope', 'mlRouteParam', 'mlList', "mlState", function($scope, mlRouteParam, mlList, mlState) {
    
    $scope.states = mlState.getStates();
    $scope.lists = mlList.getLists();

    $scope.selectList = function(id) {
      mlRouteParam.setListId(id);
      $scope.updatedListTitle = $scope.states.currentList.title;
      $scope.enableEdit = false;
    };

    $scope.removeList = function(id) {
      mlList.removeListById(id);
    };

    $scope.addList = function() {

      if (!$scope.newListTitle) {
        return;
      }

      var config = {};
      config.title = $scope.newListTitle;
      mlList.addList(config);

      $scope.newListTitle = "";
      
    };

    $scope.enableEditField = function(id) {
      $scope.enableEdit = id;
    };

    $scope.stopPropagation = function(event) {
      event.stopPropagation();
    };

    $scope.updateList = function(id, updatedListTitle) {

      if (!updatedListTitle) {
        return;
      }

      mlList.updateListById(id, updatedListTitle);
      $scope.enableEdit = false;
      
    };

}]);
