/**
 * Created by jx685f on 7/14/2015.
 */

var app = angular.module('main');

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'app/components/home/home-view.html',
			controller: 'homeController'
        })
        .when('/login', {
            templateUrl: 'app/components/login/login-view.html',
			controller: 'loginController'
        })
        .when('/question/:postId', {
            templateUrl: 'app/components/question/question-view.html',
            controller: 'questionController'
        })
        .when('/create', {
            templateUrl: 'app/components/create/create-view.html',
            controller: 'createController'
        })
        .when('/topic/:topicName', {
            templateUrl: 'app/components/topic/topic-view.html',
            controller: 'topicController'
        })
        .when('/search/:searchParams', {
            templateUrl: 'app/components/result/result-view.html',
            controller: 'resultController'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);
