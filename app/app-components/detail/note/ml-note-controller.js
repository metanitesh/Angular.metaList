"use strict";

angular.module("metaList").controller('mlNoteCtrl', ['$scope', 'mlState', 'mlTask', function($scope, mlState, mlTask) {

    $scope.states = mlState.getStates();

    $scope.updateContent = function(newConent){
        var taskId = $scope.states.currentTask.id;
        mlTask.updateContent( taskId, newConent);
    };
    
}]);
