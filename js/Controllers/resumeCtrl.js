angular.module('mySiteApp')
	.controller('resumeCtrl', ['$scope', function($scope) {

		$scope.picture = "images/IsraelEdited.jpg";
		$scope.quote = "Resume";
		$scope.visibleContent = [];

		$scope.showContent = function(content) {

			if (content === 'experience' && $scope.visibleContent.indexOf('experience') !== -1) {
				$scope.visibleContent.splice($scope.visibleContent.indexOf('experience'), 1);
				if ($scope.visibleContent.indexOf('PM') !== -1) {
					$scope.visibleContent.splice($scope.visibleContent.indexOf('PM'), 1);
				}
				if ($scope.visibleContent.indexOf('voipSupport2') !== -1) {
					$scope.visibleContent.splice($scope.visibleContent.indexOf('voipSupport2'), 1);
				}
				if ($scope.visibleContent.indexOf('voipSupport1') !== -1) {
					$scope.visibleContent.splice($scope.visibleContent.indexOf('voipSupport1'), 1);
				}	
				if ($scope.visibleContent.indexOf('apple') !== -1) {
					$scope.visibleContent.splice($scope.visibleContent.indexOf('apple'), 1);
				}
				return;
			}

			if ($scope.visibleContent.indexOf(content) === -1) {
				$scope.visibleContent.push(content);
			} else {
				$scope.visibleContent.splice($scope.visibleContent.indexOf(content), 1);
			}
		}

		$scope.visibleCheck = function(content) {
			if ($scope.visibleContent.indexOf(content) === -1) {
				return false;
			}
			return true;
		}

}]);