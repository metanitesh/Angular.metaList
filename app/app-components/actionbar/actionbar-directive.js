angular.module("metaList").directive("actionbar", ['mlStorage',"mlLocalStorage", function(mlStorage, mlLocalStorage){

    return {
        restrict: "E",
        replace: false,
        templateUrl: "app-components/actionbar/actionbar.html",
        scope:true,
        link: function(scope, element){
            scope.save = function(){
                var appData = mlStorage.getData();
                mlLocalStorage.saveLocal(appData);
                angular.element(".save-frame").fadeIn("fast").fadeOut("fast").fadeIn("fast").fadeOut("fast")
            }
        }

    }    

}])

