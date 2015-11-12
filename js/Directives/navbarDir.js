angular.module('mySiteApp')
	.directive('navbarDir', function() {
		return {
			restrict: 'E',
			templateUrl: 'js/Templates/navbarTmpl.html',
			scope: {
				picture: '=',
				quote: '='
			},
			link: function(scope, element, attrs){
				jQuery('.fade-wrapper').hide().fadeIn('slow');
			}
		}

});