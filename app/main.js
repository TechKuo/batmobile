var app = angular.module("main", [
    'ngRoute'
]);

app.run(function($rootScope, $location) {

    $rootScope.$on('$locationChangeStart', function(event, next, current) {
        if (!$rootScope.username) {
            $location.path('/login')
        }
    })

});
