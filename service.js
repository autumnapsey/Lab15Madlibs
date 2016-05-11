var app = angular.module('app');

app.factory('myService', function(){
	var words = "";
	var words2 = "";
	return {
		saveData: function(string, string2){
			words = string;
			words2 = string2;
		},
		getData: function(){
			return {
				string: words,
				string2: words2
			};
		}
	};
});