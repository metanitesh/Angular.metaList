"use strict";

describe('mlStorage service', function() {

  beforeEach(module('metaList'));

  beforeEach(function() {
    localStorage.setItem("testDb", JSON.stringify({
      list: "movie"
    }));
  });

  beforeEach(module(function($provide) {
    $provide.value("mlBootstrapData", {
      list: "todo"
    });
  }));

  it('is sane', inject(function(mlStorage) {

    /*then*/
    expect(mlStorage).toBeDefined();
  }));


  it("init, should intialize db and set bootstrapData", inject(function(mlStorage) {

    /*setup*/
    mlStorage.setDbName("newTestDb");

    /*when*/
    mlStorage.init();
    var data = mlStorage.getData();

    /*then*/
    expect(data).toEqual({
      list: "todo"
    });

    /*after*/
    localStorage.removeItem("newTestDb");
    localStorage.removeItem("testDb");
  }));


  it("init, should use if db is available in localstorage", inject(function(mlStorage) {

    /*setup*/
    mlStorage.setDbName("testDb");
    mlStorage.init();

    /*when*/
    var data = mlStorage.getData();

    /*then*/
    expect(data).toEqual({
      list: "movie"
    });

    /*after*/
    localStorage.removeItem("testDb");
  }));

});