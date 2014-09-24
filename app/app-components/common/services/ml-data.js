angular.module("metaList").factory('mlData', ["mlLocalStorgae", function(mlLocalStorgae) {

    "use strict";


    var listsDb = mlLocalStorgae.getData();

     var genrateId = function() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
          var r = Math.random() * 16 | 0,
            v = c === "x" ? r : (r & 0x3 | 0x8);
          return v.toString(16);
        }).toUpperCase();
    }

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

    var addList = function(config){
      if(!config.title){
        throw "to add a new list item title is required";
      }

      var id = genrateId();
      var obj = {
        id: id,
        title : ""
      };

      for(var key in config){ 
        if(config.hasOwnProperty(key)){
          obj[key] = config[key]
        }
      }

      listsDb.push(obj);

    }

    return {
      getLists: getLists,
      genrateId: genrateId,
      getListById: getListById,
      removeListById: removeListById,
      updateListById: updateListById,
      addList: addList
    };

}]);