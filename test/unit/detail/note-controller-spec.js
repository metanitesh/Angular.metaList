 describe("note controller", function() {

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
    controller("mlNoteCtrl", {
      $scope: scope
    })
  })

  it("updateContent, should update content of task", inject(function(mlTaskService){
    /*setup*/
    spyOn(mlTaskService, "updateContent");
    
    /*when*/
    scope.updateContent("newContent");

    /*then*/
    expect(mlTaskService.updateContent).toHaveBeenCalled();
  }))
});