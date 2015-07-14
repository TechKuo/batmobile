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
	
	navbarController.$inject = ['$scope'];
	
	function navbarController($scope) {
		var vm = this;	
		vm.name = 'navbarController';
	
		
		initialize();	
		
		///////////////////////////

		function initialize() {
		};
			
	};
})();