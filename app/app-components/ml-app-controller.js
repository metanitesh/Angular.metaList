angular.module('metaList').controller("mlAppController", ['$scope', "mlRouteParam", "mlState", function($scope, mlRouteParam, mlState){

    listIdWatcher = function(){
        return mlRouteParam.getListId();        
    }

    listIdListener = function(listId){
        if(listId){
            mlState.setCurrentList(listId);    
        }
        
    }
    
    taskIdWatcher = function(){
        return mlRouteParam.getTaskId();        
    }
    
    taskIdListener = function(taskId){
        if(taskId){
            mlState.setCurrentTask(taskId);    
        }
        
        
    }    

    $scope.$watch(listIdWatcher, listIdListener);
    $scope.$watch(taskIdWatcher, taskIdListener);
}])