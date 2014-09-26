angular.module("metaList").factory('mlRouteParam', ["$location", function($location ) {

  var getParam = function(){
    var ids = $location.path().split("/").slice(1);
    var paramObj = {
      listId: false,
      taskId: false
    }
    if(ids[0]){
      paramObj.listId = ids[0];
    }
    if(ids[1]){
      paramObj.taskId = ids[1];
    }
    return paramObj;
  }

  var setParam = function(listId, taskId){

    var str = "/";
    if(listId){
      
      str +=  listId;  
    }
    if(taskId){
     str += "/"
     str += taskId;   
    }

    
    $location.path(str)
  }

  return {
     getParam: getParam,
     setParam: setParam      
  }
}])
