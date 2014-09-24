angular.module("metaList").directive("list", function(){

    return {
        restrict: "E",
        replace: false,
        templateUrl: "app-components/list/list.html",
        controller: 'mlListCtrl'
    }    

})
