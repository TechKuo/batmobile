var app = angular.module("main", []);

$(document).ready(function () {
	$('[data-toggle="offcanvas"]').click(function () {
		$('.row-offcanvas').toggleClass('active')
	});
});

app.controller("ctrl", function($scope) {
	
	$scope.user = {
		username: "",
		password: "",
		loggedIn: false,
		posts: []
	};
	
	$scope.post = {
		text: ""
	};
	
	$scope.createPost = function() {
		var PostClass = Parse.Object.extend("Posts");
		var newPost = new EventClass();

		newPost.set("text", $scope.post.text);

		newPost.save(null,{
			success: function(result) {
				alert("New post successfully added!");
			}, error: function(result) {
				alert("Unknown error uploading new post!");
			}
		});
	};
	
	$scope.init = function() {
		Parse.initialize("MOBxFrwSUvNUxvglhXSE92Dw2cRtPgo7vfDNjw1r", "nVZcYWW5VoSp3As1SJeOqlwfksRdlSJr2xGZjjv0");
	};
	
	$scope.login = function() {
		var UserClass = Parse.Object.extend("Users");
		var query = new Parse.Query(UserClass);

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