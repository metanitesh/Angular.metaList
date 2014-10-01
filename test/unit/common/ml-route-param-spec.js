"use strict";

describe('mlRouteParam service', function() {

  beforeEach(module('metaList'));

  beforeEach(module(function($provide) {
    $provide.value("$location", {
      path: function() {
        return "/1/12";
      }
    });
  }));

  it('is sane', inject(function(mlRouteParam) {

    /*then*/
    expect(mlRouteParam).toBeDefined();
  }));

  it("getListId, should  get listId from location object", inject(function(mlRouteParam) {

    var listId = mlRouteParam.getListId();

    /*then*/
    expect(listId).toEqual("1");

  }));


  it("taskId, should  get listId from location object", inject(function(mlRouteParam) {

    var taskId = mlRouteParam.getTaskId();

    /*then*/
    expect(taskId).toEqual("12");

  }));

  it("setListId, should set listId to location object", inject(function($location, mlRouteParam) {

    /*setup*/
    spyOn($location, "path");

    /*when*/
    mlRouteParam.setListId(1);

    /*then*/
    expect($location.path).toHaveBeenCalledWith("/1");
  }));

  it("setTaskId, should set taskId to location object", inject(function($location, mlRouteParam) {

    /*setup*/
    spyOn($location, "path").andReturn("/1");

    /*when*/
    mlRouteParam.setTaskId(12);

    /*then*/
    expect($location.path).toHaveBeenCalledWith("/1/12");
  }));



});