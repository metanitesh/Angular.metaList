angular.module('metaList').factory("mlStorage", ["mlBootstrapData", "mlLocalStorage", function(mlBootstrapData, mlLocalStorage) {

    var data;
    var dbName;

    var setDbName = function(name) {
      dbName = name;
    }

    var getData = function() {
      return data;
    }

    var init = function() {
      
      if(!dbName){
        throw "no db name found, set Db name using setDbName() first"
      } 

      mlLocalStorage.setStorageName(dbName);

      if (!mlLocalStorage.hasLocal(dbName)) {  
        mlLocalStorage.saveLocal(mlBootstrapData);
      }

      data = mlLocalStorage.loadLocal();
    }

    return {
      getData: getData,
      setDbName: setDbName,
      init: init
    }

}])