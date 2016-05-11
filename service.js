var app = angular.module('app');

app.factory('myService', function(){
	var words = "";
	var words2 = "";
	var words3 = "";
	
	return {
		saveData: function(string, string2, string3){
			words = string;
			words2 = string2;
			words3 = string3;

		},
		getData: function(){
			return {
				string: words,
				string2: words2,
				string3: words3
			};
		}
	};
});