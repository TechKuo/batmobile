angular.module("main").controller("questionController", function($scope, $rootScope) {
	
	$scope.title = "";
	$scope.comments = [];
	
	$scope.getInfo = function() {
		var query = new Parse.Query("Posts");
		query.get($rootScope.post.id, {
			success: function(object) {
				$scope.title = object.attributes.text;
				$scope.comments = object.attributes.comments;
			}, error: function(object) {
				alert("Error retrieving question info!");
			}
		});
	};
});