angular.module("metaList").factory('mlData', ["mlLocalStorgae", function(mlLocalStorgae) {

    "use strict";


    var listsDb = mlLocalStorgae.getData();

    // var listInterface = {
    //   id: "",
    //   title: "",
    //   tasks: []
    // } 


    var getLists = function() {
      return listsDb;
    }

    var getListById = function(id) {
      return _.findWhere(listsDb, {
        id: id
      });
    }

    var removeListById = function(id) {

      for (var i = listsDb.length - 1; i >= 0; i--) {
        if (listsDb[i]["id"] === id)
          listsDb.splice(i, 1);        
      }

    }

    var updateListById = function(id, config){
      
      var list = getListById(id);

      for(var key in config){
        if(config.hasOwnProperty(key)){
          list[key] = config[key];
        }       
      }

    };

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
      removeListById: removeListById,
      updateListById: updateListById
      // addList: addList
    };

}]);