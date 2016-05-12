var app = angular.module('app');

app.factory('myService', function(){
	var words = {};

	return {
		saveData: function(wordsObj){
			words = wordsObj;
		},
		getData: function(){
			return words;
		}
	};
});