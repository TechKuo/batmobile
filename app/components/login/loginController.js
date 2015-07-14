angular.module("main").controller("loginController", function($scope, $rootScope) {
	
	$scope.loginInfo = {
		username: "",
		password: ""
	};
	
	$scope.login = function() {
		var UserClass = Parse.Object.extend("Users");
		var query = new Parse.Query(UserClass);

		query.find({
			success: function(results) {
				for (var i=0; i<results.length; i++) {
					if (results[i].get("username") == $scope.loginInfo.username) {
						if (results[i].get("password") == $scope.loginInfo.password) {
							$rootScope.user.username = $scope.loginInfo.username;
							$rootScope.user.password = $scope.loginInfo.password;
							$rootScope.user.posts = results[i].get("posts");
							return;
						}
					}
				}
				alert("Invalid Username or Password!");
			}, error: function(results) {
				alert("Unknown error logging in!");
			}
		});
	};
});