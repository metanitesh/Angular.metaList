// describe("unit", function() {
//   var mockListDb;

//    beforeEach(function() {
//     mockListDb = [{
//       id: 1,
//       title: "todos"
//       }, {
//       id: 2,
//       title: "movie"
//     }];

//   });

//   beforeEach(module("metaList"))
//   beforeEach(module("templates"));

//   beforeEach(module(function($provide) {
//     $provide.value("mlData", {
//       getLists: function(){
//         return mockListDb;
//       }
//     })
//   }));

  

//   it("directive", function() {
//     var el = angular.element("<list></list>");

//     inject(function($compile, $rootScope) {
//       var scope = $rootScope;
//       $compile(el)(scope);
//       scope.$digest()

//     })

//     expect($(el).find("ul>li").length).toEqual(2);
//     expect($(el).find("ul>li:first").text().trim()).toEqual("todos");

//   })
// })