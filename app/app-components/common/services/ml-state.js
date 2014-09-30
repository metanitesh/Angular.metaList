angular.module("metaList").factory('mlState', ["mlListService", "mlTaskService", function(mlListService, mlTaskService) {

    var states = {
       currentList: "",
       tasks: "",
       currentTask: "",
       currentContent: "",
       currentComments: ""
    } 

    var setCurrentList = function(listId) {
      var currentList = mlListService.getListById(listId);
     
      states.currentList = currentList;
      states.tasks = mlTaskService.setTasks(currentList.tasks);
      
      states.currentTask = "";
      states.currentContent = "";
      states.currentComments = ""
    };

    var getStates = function(){
      return states;
    }

    var setCurrentTask = function(taskId){
      var currentTask = mlTaskService.getTaskById(taskId);
      states.currentTask = currentTask;
      states.currentContent = currentTask.content;
      states.currentComments = currentTask.comments
    }

    return {
      setCurrentList: setCurrentList,
      setCurrentTask: setCurrentTask,
      getStates: getStates
    }

}])