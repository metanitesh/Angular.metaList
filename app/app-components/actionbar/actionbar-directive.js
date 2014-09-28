angular.module("metaList").directive("actionbar", function(){

    return {
        restrict: "E",
        replace: false,
        templateUrl: "app-components/actionbar/actionbar.html",
        controller: "mlActionbarCtrl",
        scope:true

    }    

})


angular.module("metaList").controller('mlActionbarCtrl', ['$scope', 'mlLocalStorgae', function($scope, mlLocalStorgae) {

    $scope.save = function(){        
        mlLocalStorgae.saveLocal("metaList", mlLocalStorgae.getData());
    }

}])