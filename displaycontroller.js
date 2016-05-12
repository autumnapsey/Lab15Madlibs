var app = angular.module('app');

app.controller('displaycontroller', function($scope, myService) {
	$scope.wordObject = myService.getData();
	console.log(myService.getData());
});