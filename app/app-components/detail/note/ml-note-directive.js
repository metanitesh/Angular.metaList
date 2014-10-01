"use strict";

angular.module("metaList").directive("note", function(){

    return {
        restrict: "E",
        replace: false,
        templateUrl: "app-components/detail/note/ml-note.html",
        controller: 'mlNoteCtrl',
        scope: true
    };

});
