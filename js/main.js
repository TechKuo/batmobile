var app = angular.module("main", []);

app.controller("ctrl", function($scope) {
	
	$scope.user = {
		username: "",
		password: "",
		posts: []
	};
	
	$scope.init = function() {
		Parse.initialize("MOBxFrwSUvNUxvglhXSE92Dw2cRtPgo7vfDNjw1r", "nVZcYWW5VoSp3As1SJeOqlwfksRdlSJr2xGZjjv0");
	};
	
	$scope.login = function() {
		
		
		var PostObject = Parse.Object.extend("Posts");
		var newPost = new PostObject();
		newPost.set("text", "This is a test");
		newPost.save();
	};
});