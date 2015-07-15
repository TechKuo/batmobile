/**
 * Created by jx685f on 7/15/2015.
 */

var app = angular.module('main');

app.controller('resultController',
['$scope', '$routeParams',
function($scope, $routeParams) {

    $scope.posts = [];
    $scope.resultLen = $scope.posts.length;

    function init() {
        var PostClass = Parse.Object.extend("Posts");
        var query = new Parse.Query(PostClass);
        var search = $routeParams.searchParams;

        query.find({
            success: function(results) {
                $scope.$apply(function() {
                    $scope.posts = results.filter(function(p) {
                        return p.get('description').indexOf(search) > -1 ||
                            p.get('text').indexOf(search) > -1
                    }).map(function(p) {
                        return {
                            text: p.get('text'),
                            description: p.get('description')
                        }
                    });
                    $scope.resultLen = $scope.posts.length;
                });

            },
            error: function(results) {

            }
        })
    }

    init();

}]);
