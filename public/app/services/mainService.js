// INITILIZE SERVICE
// ============================================================
angular.module("app").service("mainService", function($http) {
  // CRUD FUNCTIONS
  // ============================================================
  this.getIdeas = function() {
    return $http({
      method: 'GET',
      url: '/api/table'
    }).then(function(response) {
      return response.data
    });
  };
  this.getIdea = function(id) {
    return $http({
      method: 'GET',
      url: '/api/table/?_id='+id
    });
  };
  this.joinIdeas = function(collection){
    return $http({
      method: 'GET',
      url: ''
    });
  }
  this.createIdeas = function(thought) {
    $http.post('/api/table', thought);
  }
  this.editIdea = function(id, collection) {
    return $http({
      method: 'PUT',
      url: "/api/table/" + id,
      data: collection
    });
  };
  this.deleteIdeas = function(id) {
    return $http({
      method: 'DELETE',
      url: '/api/table/' + id
    }).then(function(response) {
      console.log("make it back");
    });
  };
  // OTHER FUNCTIONS
  // ============================================================

});
