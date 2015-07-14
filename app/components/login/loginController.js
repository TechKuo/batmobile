angular.module("main").controller("loginController", function($scope, $rootScope, $location) {
	
	$scope.loginInfo = {
		username: "",
		password: ""
	};
	
	$scope.login = function() {
		var UserClass = Parse.Object.extend("Users");
		var query = new Parse.Query(UserClass);
		
		query.find({
			success: function(results) {
				console.log(results);
				for (var i=0; i<results.length; i++) {
					if (results[i].get("username") == $scope.loginInfo.username &&
						results[i].get("password") == $scope.loginInfo.password) {
							$rootScope.user.username = $scope.loginInfo.username;
							$rootScope.user.password = $scope.loginInfo.password;
							$rootScope.user.loggedOn = true;
						localStorage.loggedin = true;
							$rootScope.user.posts = results[i].get("posts");
							$location.path('/');
					}
				}
			}, error: function(results) {
				alert("Unknown error logging in!");
			}
		});
	};
});