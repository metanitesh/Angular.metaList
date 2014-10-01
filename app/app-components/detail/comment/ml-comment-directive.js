"use strict";

angular.module("metaList").directive("comment", function(){

    return {
        restrict: "E",
        replace: false,
        templateUrl: "app-components/detail/comment/ml-comment.html",
        controller: "mlCommentCtrl",
        scope: true
    };

});
