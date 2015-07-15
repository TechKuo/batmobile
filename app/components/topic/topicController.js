/**
 * Created by jx685f on 7/14/2015.
 */

angular.module("main").controller("topicController", function($scope, $rootScope) {

    $scope.topic = {};

    $scope.getInfo = function () {
        var query = new Parse.Query("Topic")
        {
            query.get($rootScope.topic.id, {
                success: function (object) {
                    $scope.topic = object.attributes.topic;
                }, error: function (object) {
                    alert("Error retrieving topic info!");
                }
            })
        };
    };

});
