// CONFIG
// ============================================================
var app = angular.module("app", ['ui.router']).config(function($stateProvider, $urlRouterProvider) {
  // INITILIZE STATES
  // ============================================================
  $stateProvider
    // HOME STATE
    .state('home', {
      url: '/home',
      templateUrl: './views/home.html',
      controller: 'homeCtrl'
    })// ABOUT STATE
    .state('about', {
      url: '/about',
      templateUrl: './views/about.html',
      controller: 'aboutCtrl'
    })// HOME STATE
    .state('createTable', {
      url: '/createTable',
      templateUrl: './views/createTable.html',
      controller: 'createTableCtrl'
    })// tableDetail STATE
    .state('tableDetail', {
      url: '/tableDetail',
      templateUrl: './views/tableDetail.html',
      controller: 'tableDetailCtrl'
    });




  // ASSIGN OTHERWISE
  // ============================================================
  $urlRouterProvider.otherwise('/home');
});
