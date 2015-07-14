/**
 * Created by tk685f on 7/14/2015.
 */

(function () {
	
	'use strict';
	
	angular.module('main').directive('sidebar', sidebar);
	
	function sidebar() {
		var directive = {
				restrict: 'E',				
				templateUrl: 'app/shared/sidebar/sidebar-view.html',
				controller: sidebarController, 
				controllerAs: 'sidebarController'
		};
		
		return directive;
	}
	
	sidebarController.$inject = ['$scope'];
	
	function sidebarController($scope) {
		var vm = this;	
		vm.name = 'sidebarController';
	
		
		initialize();	
		
		///////////////////////////

		function initialize() {
		};
			
	};
})();