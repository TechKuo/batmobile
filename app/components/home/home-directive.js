/**
 * Created by tk685f on 7/14/2015.
 */

(function () {
	
	'use strict';
	
	angular.module('main').directive('home', home);
	
	function home() {
		var directive = {
				restrict: 'E',		
				templateUrl: 'app/shared/home/home-view.html',
				controller: homeController, 
				controllerAs: 'homeController'
		};
		
		return directive;
	}
	
	homeController.$inject = ['$scope'];
	
	function homeController($scope) {
		var vm = this;	
		vm.name = 'homeController';
	
		
		initialize();	
		
		///////////////////////////

		function initialize() {
		};
			
	};
})();