var app = angular.module('app');

app.controller('displaycontroller', function($scope, myService) {
	var dataOnPage = myService.getData();
	$scope.string = dataOnPage.string;
	$scope.string2 = dataOnPage.string2;
	$scope.string3 = dataOnPage.string3;

	console.log(dataOnPage);
});