"use strict";

angular.module("metaList").factory('mlList', ["mlStorage", "mlIdGenerator",
  function(mlStorage, mlIdGenerator) {

    var listsDb = mlStorage.getData();

    var getLists = function() {
      return listsDb;
    };

    var getListById = function(id) {
      return _.findWhere(listsDb, {
        id: id
      });
    };

    var removeListById = function(id) {
      for (var i = listsDb.length - 1; i >= 0; i--) {
        if (listsDb[i].id === id)
          listsDb.splice(i, 1);
      }
    };

    var updateListById = function(id, title) {
      var list = getListById(id);

      if (!title) {
        throw "can not update with a empty title";
      }

      list.title = title;

    };

    var addList = function(config) {
      if (!config.title) {
        throw "to add a new list item title is required";
      }

      var obj = {
        id: mlIdGenerator.generateId(),
        title: "",
        tasks: []
      };

      for (var key in config) {
        if (config.hasOwnProperty(key)) {
          obj[key] = config[key];
        }
      }

      listsDb.push(obj);

    };

    return {
      getLists: getLists,
      getListById: getListById,
      removeListById: removeListById,
      updateListById: updateListById,
      addList: addList
    };

  }
]);