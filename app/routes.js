/**
 * Created by jx685f on 7/14/2015.
 */

app = angular.module('main', [
    'ngRoute'
]);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
        })
        .when('/login', {

        })
        .otherwise({
            redirectTo: '/'
        });
}]);
