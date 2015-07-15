angular.module("main").controller("homeController", function($scope) {
	$scope.posts = [];
	
	var PostClass = Parse.Object.extend("Posts");
	var query = new Parse.Query(PostClass);

	query.find({
		success: function(results) {
			$scope.posts = [];
			for (var i=0; i<results.length; i++) {
				var newPost = {text: "", description: "", id: ""};
				newPost.text = results[i].get("text");
				newPost.description = results[i].get("description");
				newPost.id = results[i].get("postId");
				$scope.posts.push(newPost);
			}
			$scope.$apply();
		}, error: function(results) {
			alert("Error retrieving top posts!");
		}
	});
	
});