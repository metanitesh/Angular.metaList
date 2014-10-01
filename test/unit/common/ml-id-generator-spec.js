"use strict";

describe('mlIdGenerator service', function() {

  var mockListDb;


  beforeEach(module('metaList'));

  it('is sane', inject(function(mlIdGenerator) {

    /*then*/
    expect(mlIdGenerator).toBeDefined();
  }));

  it('generateId, can genrate 36 digit ids', inject(function(mlIdGenerator) {

    /*then*/
    expect(mlIdGenerator.generateId().length).toEqual(36);
  }));


});