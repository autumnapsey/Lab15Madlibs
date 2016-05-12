var app = angular.module('app');

app.controller('inputcontroller', function($scope, myService, $location) {
	var word = "";
	var word2 = "";
	var word3 = "";
	var word4 = "";
	var word5 = "";
	var word6 = "";
	var word7 = "";

	$scope.getWords = function(wordModel, wordModel2, wordModel3, wordModel4, wordModel5, wordModel6, wordModel7){
		word += wordModel;
		word2 += wordModel2;
		word3 += wordModel3;
		word4 += wordModel4;
		word5 += wordModel5;
		word6 += wordModel6;
		word7 += wordModel7;

		myService.saveData(word, word2, word3, word4, word5, word6, word7);
		$location.path('/display');
	};
});