angular.module('auth.signup', [])

.controller('SignupController', function($location, $window, AuthServices){

	var user = {};
	var signup = this;

	signup.submit = function(){
		user.username = signup.username;
	 	user.password = signup.password;
	 	user.email = signup.email;
	 	user.city = signup.city;
	 	console.log(user);
	 	AuthServices.submitNewUser({user: user})
	 		.then(function(token){
	 			//$window.localStorage.setItem('com.gameswap', token); 

	 			// using setTimeout till we get the async hammered out

	 			//setTimeout($location.path('/userprofile'), 500);

        		$location.path('/userprofile');
	 		})
	 		.catch(function(error) {
        		console.error(error);
      		}); 	
	}
})


