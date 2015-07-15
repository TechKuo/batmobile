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
        .when('/question', {
            templateUrl: 'app/components/question/question-view.html',
            controller: 'questionController'
        })
        .when('/topic/:topicName', {
            templateUrl: '/app/components/topic/topic-view.html',
            controller: 'topicController'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);
