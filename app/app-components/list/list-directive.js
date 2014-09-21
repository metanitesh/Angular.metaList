angular.module("metaList").directive("list", function(){

    return {
        restrict: "E",
        templateUrl: "app-components/list/list.html",
        controller: 'mlListCtrl'
    }    

})
