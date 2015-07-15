angular.module("main").controller("topicController", ["$scope", "$rootScope", "$routeParams", function($scope, $rootScope, $routeParams) {
	$scope.topic = {title: $routeParams.topicName, questions: []};
	$scope.isToggled = false;

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
				if (results[i].get("topic") == $scope.topic.title) $scope.topic.questions.push(newPost);
			}
			$scope.$apply();
		}, error: function(results) {
			alert("Error retrieving top posts!");
		}
	});
	
}]);