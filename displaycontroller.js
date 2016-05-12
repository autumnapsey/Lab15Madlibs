var app = angular.module('app');

app.controller('displaycontroller', function($scope, myService) {
	var dataOnPage = myService.getData();
	$scope.string = dataOnPage.string;
	$scope.string2 = dataOnPage.string2;
	$scope.string3 = dataOnPage.string3;
	$scope.string4 = dataOnPage.string4;
	$scope.string5 = dataOnPage.string5;
	$scope.string6 = dataOnPage.string6;
	$scope.string7 = dataOnPage.string7;
});