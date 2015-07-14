var app = angular.module("main", []);

app.controller("ctrl", function($scope) {
	
	$scope.user = {
		username: "",
		password: "",
		loggedIn: false,
		posts: []
	};
	
	$scope.init = function() {
		Parse.initialize("MOBxFrwSUvNUxvglhXSE92Dw2cRtPgo7vfDNjw1r", "nVZcYWW5VoSp3As1SJeOqlwfksRdlSJr2xGZjjv0");
	};
	
	$scope.login = function() {
		var userClass = Parse.Object.extend("Users");
		var query = new Parse.Query(userClass);

		query.find({
			success: function(results) {
				for (var i=0; i<results.length; i++) {
					if (results[i].get("username") == $scope.user.username) {
						if (results[i].get("password") == $scope.user.password) {
							$scope.user.loggedIn = true;
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