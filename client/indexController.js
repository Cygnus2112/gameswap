angular.module('index.controller', [])
.controller('IndexController', function(AuthServices, $scope) {
	var index = this;
	$scope.authServices = AuthServices;
  index.isAuth = AuthServices.isAuth();
  $scope.$watch('authServices.isAuth()', function(authVal) {
    index.isAuth = authVal;
  }); 

  index.signOut = function(){
    AuthServices.signOut();
    index.isAuth = false;
  };
});
