var app = angular.module("main", [
    'ngRoute'
]);

app.run(function($rootScope, $location) {

	$rootScope.user = {
		username: "",
		password: "",
		loggedOn: false
	};
	
	Parse.initialize("MOBxFrwSUvNUxvglhXSE92Dw2cRtPgo7vfDNjw1r", "nVZcYWW5VoSp3As1SJeOqlwfksRdlSJr2xGZjjv0");

    $rootScope.$on('$locationChangeStart', function(event, next, current) {
        if (!$rootScope.user.loggedOn) {
            $location.path('/login')
        }
    })

});
