 describe("comment controller", function() {

  var scope;
  var controller;

  
  beforeEach(module("metaList"));

  beforeEach(function() {
    inject(function($rootScope, $controller) {

      scope = $rootScope.$new();
      controller = $controller;

    })
  });

  beforeEach(function() {
    controller("mlCommentCtrl", {
      $scope: scope
    })
  })

  it("updateContent, should update content of task", inject(function(mlTaskService){
    /*setup*/
    spyOn(mlTaskService, "addComment");
    
    /*when*/
    scope.addComment("newComment");

    /*then*/
    expect(mlTaskService.addComment).toHaveBeenCalled();
    expect(mlTaskService.addComment.mostRecentCall.args[1]).toEqual("newComment")
  }))
});