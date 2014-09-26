angular.module("metaList").directive("task", function(){

    return {
        restrict: "E",
        replace: false,
        templateUrl: "app-components/task/task.html",
        controller: 'mlTaskCtrl',
        scope: true
    }    

})
