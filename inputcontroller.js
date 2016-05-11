var app = angular.module('app');

app.controller('inputcontroller', function($scope, myService) {
	var word = "";
	$scope.getNoun = function getNoun(nounModel){
		word += nounModel;
		myService.saveData(word);
		
	};
});