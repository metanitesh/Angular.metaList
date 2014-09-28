angular.module('metaList').factory("mlLocalStorgae", ["mlBootstrapData", function(mlBootstrapData) {

    var data;

    var loadLocal = function(storageName) {
      return JSON.parse(localStorage[storageName]);
    }

    var saveLocal = function(storageName, data) {
      localStorage[storageName] = JSON.stringify(data);
    }

    var getData = function() {
      return data;
    }

    
    
    if (!localStorage['metaList']) {
      
      saveLocal("metaList", mlBootstrapData);
    }

    data = loadLocal("metaList")

    console.log(data);

    return {
      getData: getData,
      loadLocal: loadLocal,
      saveLocal: saveLocal
    }
}])