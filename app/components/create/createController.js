angular.module("main").controller("createController", function($scope, $rootScope) {
	$scope.info = {
		topic: "",
		text: "",
		description: ""
	};
	
	$scope.createQuestion = function() {
		var PostClass = Parse.Object.extend("Posts");
		var newPost = new PostClass();

		newPost.set("text", $scope.info.text);
		newPost.set("topic", $scope.info.topic);
		newPost.set("description", $scope.info.description);
		newPost.set("user", "am790d");

		$scope.info.topic = "";
		$scope.info.text = "";
		$scope.info.description = "";
		
		newPost.save(null,{
			success: function(result) {
				newPost.set("postId", result.id);
				newPost.save();
			}, error: function(result) {
				alert("Error creating post!");
			}
		});
	};
});