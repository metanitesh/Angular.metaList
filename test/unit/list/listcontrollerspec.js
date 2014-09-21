describe("list controller", function() {

  var scope;
  var controller;

  beforeEach(module("metaList"));
  beforeEach(function() {
    inject(function($rootScope, $controller) {

      scope = $rootScope.$new();
      controller = $controller;

    })
  });

  it("is sane", function() {
    
    /*setup*/    
    controller("mlListCtrl", {
      $scope: scope,
      mlData: {
        getLists: function(){
            return 'listItemsObject';
        }
      }
    })

    /*then*/
    expect(scope.lists).toEqual(listItemsObject);

  });

});