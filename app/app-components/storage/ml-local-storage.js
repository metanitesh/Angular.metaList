angular.module('metaList').factory("mlLocalStorage", function() {

    var storageName;

    var setStorageName = function(name){
      storageName = name;
    };

    var loadLocal = function() {
      if(!storageName){
        throw "set storageName using setStorageName(), before fetching data";
      }
      return JSON.parse(localStorage[storageName]);
    }

    var saveLocal = function(data) {
      if(!storageName){
        throw "set storageName using setStorageName(), before fetching data";
      }
      localStorage[storageName] = JSON.stringify(data);
    }

    var hasLocal = function(storageName){
      return !!(localStorage[storageName])
    }

    return {
      hasLocal: hasLocal,
      setStorageName: setStorageName,
      loadLocal: loadLocal,
      saveLocal: saveLocal
    }
})