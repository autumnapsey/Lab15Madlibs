var app = angular.module('app');

app.controller('inputcontroller', function($scope, myService, $location) {
	var word = "";
	var word2 = "";
	var word3 = "";
	$scope.getWords = function(wordModel, wordModel2, wordModel3){
		word += wordModel;
		word2 += wordModel2;
		word3 += wordModel3;

		console.log(word, word2, word3);
		myService.saveData(word, word2, word3);
		$location.path('/display');
	};
});