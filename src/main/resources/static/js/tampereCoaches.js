
var moduleName = "tampereCoaches";
var dependencies = [
	"ngRoute";
]

angular.module(moduleName, dependencies)
	.config(function($routeProvider, $httpProvider) {
		$routeProvider.when("/", {
			templateUrl: "greetings.html",
			controller: "home"
		})
		.when("/login", {
			templateUrl: "login.html",
			controller: "nagivation"
		})
		.otherwise("/");
	})
	.controller("home", function($scope, $http) {
		$http.get("/resources").success(function(model) {
			$scope.greeting = model;
		});
	})
	.controller("navigation", function() {

	});
