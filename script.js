var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
	.when('/',{
		templateUrl: 'input.html',
		controller: 'inputcontroller'
	})
	.when('/display',{
		templateUrl: 'display.html',
		controller: 'displaycontroller'
	});
});