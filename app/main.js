var app = angular.module("main", []).run(function($rootScope) {
	$rootScope.user = {
		username: "",
		password: "",
		posts: []
	};
	$rootScope.post = {
		id = ""
	};
});

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
	
});