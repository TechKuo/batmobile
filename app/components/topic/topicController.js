/**
 * Created by jx685f on 7/14/2015.
 */

var app = angular.module('main');

app.controller("topicController",
['$scope', '$routeParams',
function($scope, $routeParams) {

    $scope.topicName = $routeParams.topicName;

}]);
