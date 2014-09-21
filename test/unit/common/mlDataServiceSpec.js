describe('data service', function() {

  beforeEach(module('metaList'));

  it('is sacne', inject(function(mlData) {
    expect(mlData).toBeDefined();
  }));

  it("gerList: should return listItems", inject(function(mlData) {

    var expected = [{
    title: "books",
    id: 1
    }, {
    title: "movies",
    id: 2
    }, {
    title: "life",
    id: 3
  }];

    expect(mlData.getLists()).toEqual(expected);
  }))
  
});