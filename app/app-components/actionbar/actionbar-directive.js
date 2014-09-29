angular.module("metaList").directive("actionbar", function(){

    return {
        restrict: "E",
        replace: false,
        templateUrl: "app-components/actionbar/actionbar.html",
        controller: "mlActionbarCtrl",
        scope:true

    }    

})

