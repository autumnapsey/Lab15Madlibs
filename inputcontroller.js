var app = angular.module('app');

app.controller('inputcontroller', function($scope, myService, $location) {
	var word = "";
	var word2 = "";
	$scope.getWords = function(wordModel, wordModel2){
		word += wordModel;
		word2 += wordModel2;
		console.log(word, word2);
		myService.saveData(word, word2);
		$location.path('/display');
	};
});