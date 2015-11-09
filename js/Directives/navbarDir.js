angular.module('mySiteApp')
	.directive('navbarDir', function() {
		return {
			restrict: 'E',
			templateUrl: 'js/Templates/navbarTmpl.html',
			scope: {
				picture: '='
			}
		}	
})