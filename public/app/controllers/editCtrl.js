// INITILIZE CONTROLLER
// ============================================================
angular.module("app").controller("editCtrl", function($scope, mainService) {
  // VARIABLES
  // ============================================================

  // FUNCTIONS
  // ============================================================
  mainService.getIdea($stateParams.id).then(function(response) {
    console.log(response[0]);
    $scope.editIdea = response[0]
  });
});
