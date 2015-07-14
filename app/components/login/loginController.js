/**
 * Created by jx685f on 7/14/2015.
 */


app = angular.module('main.loginPage', ['$location']);

app.controller('LoginController',
['$scope', '$location',
function($scope, $location) {

	$scope.login = function() {
		var UserClass = Parse.Object.extend("Users");
		var query = new Parse.Query(UserClass);

		query.find({
			success: function(results) {
				for (var i=0; i<results.length; i++) {
					if (results[i].get("username") == $scope.user.username) {
						if (results[i].get("password") == $scope.user.password) {
							localStorage.loggedIn = true;
							$location.path('/');
						}
					}
				}
				alert("Invalid Username or Password!");
			}, error: function(results) {
				alert("Unknown error logging in!");
			}
		});
	};

}]);