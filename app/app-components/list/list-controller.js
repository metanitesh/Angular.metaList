metaList.controller('mlListCtrl', ['$scope', 'mlData', function($scope, mlData) {

    $scope.lists = mlData.getLists();


    $scope.selectList = function(id) {
      $scope.activeListId = id;
    }

    $scope.removeList = function(id) {
      mlData.removeListById(id);
    }

    $scope.addList = function() {

      if (!$scope.newListTitle) {
        return;
      }

      config = {}
      config.title = $scope.newListTitle;
      mlData.addList(config);

      $scope.newListTitle = "";
    }

    // $scope.enableEditMode = function(list) {
    //   $scope.enableEdit = list.id;
    // }

    // $scope.updateList = function(list) {
    //     console.log($scope.updatedValue);
    //     mlData.updateList(list, $scope.updatedValue);
    //     $scope.enableEdit = false;


    // }

    // $scope.stopPropagation = function(event){
    //     event.stopPropagation();
    // }

    // $scope.removeList = function(id){
    //    mlData.removeList(id); 
    // }

    // $scope.addList = function(){
    //     // console.log($scope.newListTitle);
    //     if($scope.newListTitle){
    //         mlData.addList($scope.newListTitle); 
    //         $scope.newListTitle = "";
    //     }       

    // }
}])


// $scope.selectList = function(list) {
//   $scope.enableEdit = false;  
//   $scope.selected = list.id;
// }

// $scope.enableEditMode = function(list) {
//   $scope.enableEdit = list.id;
// }

// $scope.updateList = function(list) {
//     console.log($scope.updatedValue);
//     mlData.updateList(list, $scope.updatedValue);
//     $scope.enableEdit = false;


// }

// $scope.stopPropagation = function(event){
//     event.stopPropagation();
// }

// $scope.removeList = function(index){
//    mlData.removeList(index); 
// }

// $scope.addList = function(){
//     if($scope.newListTitle){
//         mlData.addList($scope.newListTitle); 
//         $scope.newListTitle = "";
//     }       

// }