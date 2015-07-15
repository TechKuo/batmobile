/**
 * Created by tk685f on 7/14/2015.
 */

(function () {
	
	'use strict';
	
	angular.module('main').directive('navbar', navbar);
	
	function navbar() {
		var directive = {
				restrict: 'E',		
				templateUrl: 'app/shared/navbar/navbar-view.html',
				controller: navbarController, 
				controllerAs: 'navbarController'
		};
		
		return directive;
	}
	
	navbarController.$inject = ['$scope', '$location'];
	
	function navbarController($scope, $location) {
		var vm = this;	
		vm.name = 'navbarController';

		$scope.searchText = "";
	
		
		initialize();	
		
		///////////////////////////

		function initialize() {
		};

		$scope.logout = function() {
			delete localStorage.loggedin;
			$location.path('/login');
		};

		$scope.searchQuestions = function() {
			console.log('search bar pressed');
			$location.path('/search/' + $scope.searchText);
		}
			
	};
})();