var app = angular.module("main", [
    'ngRoute'
]);

app.run(function($rootScope, $location) {

    $rootScope.$on('$locationChangeStart', function(event, next, current) {
        if (!$rootScope.user.username) {
            $location.path('/login')
        }
    })

});
