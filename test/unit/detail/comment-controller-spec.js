 "use strict";

 describe("mlCommentCtrl", function() {

   var scope;
   var controller;


   beforeEach(module("metaList"));

   beforeEach(function() {
     inject(function($rootScope, $controller) {

       scope = $rootScope.$new();
       controller = $controller;

     });
   });

   beforeEach(function() {
     controller("mlCommentCtrl", {
       $scope: scope
     });
   });

   it("updateContent, should update content of current task", inject(function(mlTask) {
     /*setup*/
     spyOn(mlTask, "addComment");

     /*when*/
     scope.addComment("newComment");

     /*then*/
     expect(mlTask.addComment).toHaveBeenCalled();
     expect(mlTask.addComment.mostRecentCall.args[1]).toEqual("newComment");
   }));
 });