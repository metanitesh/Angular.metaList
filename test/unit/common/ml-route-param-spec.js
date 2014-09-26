describe('data service', function() {

  
  
  beforeEach(module('metaList'));
  
  beforeEach(module(function($provide) {
    $provide.value("$location", {
      path: function() {
        return "/1/12";
      }
    })
  }));

  it('is sane', inject(function(mlRouteParam) {

    /*then*/
    expect(mlRouteParam).toBeDefined();
  }));

  it("getRouteParam, should should get listId and taskId in return Object", inject(function(mlRouteParam){

    var params = mlRouteParam.getParam();

    expect(params.listId).toEqual("1");
    expect(params.taskId).toEqual("12");

  }))

  it("setRouteParam, should should set listId and taskId in return Object", inject(function($location, mlRouteParam){
    
    spyOn($location, "path");

    var params = mlRouteParam.setParam(1,2);

    expect($location.path).toHaveBeenCalledWith("/1/2")
  }))
});