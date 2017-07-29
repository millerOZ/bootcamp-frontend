var miAppAngular = angular.module('login', []);

miAppAngular.controller('loginUser', function($scope){

      $scope.validateLogin = function(){
              if($scope.formulario.$valid){
                  $scope.loginOk = true;
              }
     }

})
