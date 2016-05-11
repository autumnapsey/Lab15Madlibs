var app = angular.module('app');

app.controller('displaycontroller', function($scope, myService) {
	var dataOnPage = myService.getData();
	$scope.string = dataOnPage.string;
	$scope.string2 = dataOnPage.string2;
	console.log(dataOnPage);
});