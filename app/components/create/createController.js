/**
 * Created by jx685f on 7/14/2015.
 */

var app = angular.module('main');

app.controller('createController',
['$scope',
function($scope) {

    $scope.question = {};

    $scope.createQuestion = function() {
        var question = JSON.parse(JSON.stringify($scope.question));
        console.log(question);
        $scope.question = {};
    }
}]);
