"use strict";

describe("mlNoteCtrl", function() {

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
    controller("mlNoteCtrl", {
      $scope: scope
    });
  });

  it("updateContent, should update content of current task", inject(function(mlTask) {
    /*setup*/
    spyOn(mlTask, "updateContent");

    /*when*/
    scope.updateContent("newContent");

    /*then*/
    expect(mlTask.updateContent).toHaveBeenCalled();
    expect(mlTask.updateContent.mostRecentCall.args[1]).toEqual("newContent");
  }));
});