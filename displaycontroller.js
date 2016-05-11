var app = angular.module('app');

app.controller('displaycontroller', function($scope, myService) {
	$scope.words = myService.getData();
});