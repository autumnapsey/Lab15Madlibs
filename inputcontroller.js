var app = angular.module('app');

app.controller('inputcontroller', function($scope, myService, $location) {

	$scope.getWords = function(words){

		myService.saveData(words);
		$location.path('/display');
	};
});