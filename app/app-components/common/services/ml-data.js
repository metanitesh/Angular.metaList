angular.module("metaList").factory('mlData', ["mlLocalStorgae", function(mlLocalStorgae) {

  "use strict";


  var listsDb = mlLocalStorgae.getData();

  // var listInterface = {
  //   id: "",
  //   title: "",
  //   tasks: []
  // } 

  
  var getLists = function(){
    return listsDb;
  }

  var getListById = function(id){
    return _.findWhere( listsDb, {id: id});
  }  
  // var getLists = function() {
  //   return bootStrapData;
  // };

  // var genrateId = function() {
  //     return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
  //       var r = Math.random() * 16 | 0,
  //         v = c === "x" ? r : (r & 0x3 | 0x8);
  //       return v.toString(16);
  //     }).toUpperCase();
  // }

  // var getList = function(list) {
  //   return _.where(getLists(), {
  //     id: list.id
  //   })[0];
  // };

  // var updateList = function(list, newTitle) {
  //   getList(list).title = newTitle;
  // }

  // var removeList = function(id) {
  //   delete bootStrapData[id]
  // }

  // var addList = function(listTitle) {
  //   var id= genrateId();

  //   bootStrapData[id] = {
  //     id: id,
  //     title : listTitle,
  //     tasks : [] 
  //   }
  
  // }



  return {

    getLists: getLists,
    getListById: getListById,
    // // updateList: updateList,
    // removeList: removeList,
    // addList: addList
  };

}]);