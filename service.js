var app = angular.module('app');

app.factory('myService', function(){
	var words = "";
	return {
		saveData: function(string){
			words = string;
		},
		getData: function(){
			return words;
		}
	}
});