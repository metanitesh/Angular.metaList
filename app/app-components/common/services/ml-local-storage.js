angular.module('metaList').factory("mlLocalStorgae", ["mlBootstrapData", function(mlBootstrapData) {

    var storageName;

    var setStorageName = function(name){
      storageName = name;
    };

    var loadLocal = function() {
      return JSON.parse(localStorage[storageName]);
    }

    var saveLocal = function(data) {
      localStorage[storageName] = JSON.stringify(data);
    }

    var hasLocal = function(){
      return localStorage[storageName]
    }

    return {
      hasLocal: hasLocal,
      setStorageName: setStorageName,
      loadLocal: loadLocal,
      saveLocal: saveLocal
    }
}])