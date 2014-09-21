describe('data service', function() {

  beforeEach(module('metaList'));

  it('is sacne', inject(function(mlData) {
    expect(mlData).toBeDefined();
  }));

  it("gerList: should return listItems", inject(function(mlData) {

    var expected = [{
      title: "books"
      }, {
      title: "movies"
      }, {
      title: "life"
    }];

    expect(mlData.getLists()).toEqual(expected);
  }))
  
});