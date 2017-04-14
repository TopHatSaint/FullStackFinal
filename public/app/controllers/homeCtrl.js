// INITILIZE CONTROLLER
// ============================================================
angular.module("app").controller("homeCtrl", function($scope, $window, mainService) {
  // VARIABLES
  // ============================================================

  // FUNCTIONS
  // ============================================================
  $(document).foundation()

  mainService.getIdeas().then(function(response) {
  console.table(response);
  $scope.ideas = response;
});
$scope.deleteIdeas = function(id) {
  console.log("I'm working!", id);
  mainService.deleteIdeas(id).then(function(response) {
    $window.location.reload();
    console.log(id);
  });
}


});
