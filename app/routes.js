/**
 * Created by jx685f on 7/14/2015.
 */

var app = angular.module('main');

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'app/components/home/home-view.html'
        })
        .when('/login', {
            templateUrl: 'app/components/login/login-view.html',
			controller: 'loginController'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);
