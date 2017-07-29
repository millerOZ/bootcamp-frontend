var miAppAngular = angular.module('navegacion',['ui.router']);

// miAppAngular.config(function($stateProvider,$urlRouterProvider){
//      $urlRouterProvider.otherwise('/');
//
//      $stateProvider
//         .state('home',{
//           url: '/',
//           templateUrl: 'plantillas/inicio.html'
//         })
//         .state('posts',{
//           url: '/posts',
//           templateUrl: '<posts-list></posts-list>'
//         })
// }])

miAppAngular.controller('mainCtrl', function(){

  this.hello = "world";
})
