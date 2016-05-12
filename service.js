var app = angular.module('app');

app.factory('myService', function(){
	var words = "";
	var words2 = "";
	var words3 = "";
	var words4 = "";
	var words5 = "";
	var words6 = "";
	var words7 = "";

	return {
		saveData: function(string, string2, string3, string4, string5, string6, string7){
			words = string;
			words2 = string2;
			words3 = string3;
			words4 = string4;
			words5 = string5;
			words6 = string6;
			words7 = string7;


		},
		getData: function(){
			return {
				string: words,
				string2: words2,
				string3: words3,
				string4: words4,
				string5: words5,
				string6: words6,
				string7: words7,

			};
		}
	};
});