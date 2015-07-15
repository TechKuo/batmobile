angular.module("main").controller("questionController", function($scope, $rootScope) {
	
	$scope.id = "9bLx3Hv5Xb";
	$scope.title = "";
	$scope.user = "";
	$scope.description = "";
	$scope.commentIds = [];
	$scope.comments = [];
	
	$scope.newCommentText = "";
	$scope.info = {text: ""};
	
	var query = new Parse.Query("Posts");
	query.get($scope.id, {
		success: function(object) {
			$scope.title = object.attributes.text;
			$scope.user = object.attributes.user;
			$scope.description = object.attributes.description;
			$scope.commentIds = object.attributes.comments.split(", ");
			$scope.$apply();
		}, error: function(object) {
			alert("Error retrieving question info!");
		}
	});
	$scope.refresh = function() {
		
		var query = new Parse.Query("Posts");
		query.get($scope.id, {
			success: function(object) {
				$scope.title = object.attributes.text;
				$scope.user = object.attributes.user;
				$scope.description = object.attributes.description;
				$scope.commentIds = object.attributes.comments.split(", ");
				$scope.$apply();
			}, error: function(object) {
				alert("Error retrieving question info!");
			}
		});
		
		$scope.comments = [];
		for (var i=0; i<$scope.commentIds.length; i++) {
			var query = new Parse.Query("Comments");
			query.get($scope.commentIds[i], {
				success: function(object) {
					var newComment = {text: object.attributes.text, user: object.attributes.user};
					$scope.comments.push(newComment);
					$scope.$apply();
				}, error: function(object) {
					alert("Error retrieving comments!");
				}
			});
		}
	};
	$scope.comment = function() {
		var CommentClass = Parse.Object.extend("Comments");
		var newComment = new CommentClass();

		newComment.set("text", $scope.newCommentText);
		newComment.set("user", "am790d");
		
		newComment.save(null, {
			success: function(result) {
				$scope.newCommentText = "";
				$scope.newCommentId = result.id;
				var query = new Parse.Query("Posts");
				query.get($scope.id, {
					success: function(object) {
						var currentComments = object.get("comments");
						if (currentComments != undefined && currentComments != "") currentComments += ", "+$scope.newCommentId;
						else currentComments = $scope.newCommentId;
						object.set("comments", currentComments);
						object.save();
						$scope.$apply();
					}, error: function(object) {
						alert("Unknown error creating comment!");
					}
				});
				$scope.$apply();
			}, error: function(result) {
				alert("Error creating comment!")
			}
		});
	};
});