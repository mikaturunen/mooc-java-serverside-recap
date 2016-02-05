
var moduleName = "tampereCoaches";
var dependencies = [
	"ngRoute"
];

angular.module(moduleName, dependencies)
	.config(function($routeProvider, $httpProvider) {
		$routeProvider.when("/", {
			templateUrl: "home.html",
			controller: "home"
		})
		.when("/login", {
			templateUrl: "login.html",
			controller: "navigation"
		})
		.otherwise("/");

		$httpProvider.defaults.headers.common[ "X-Requested-With" ] = "XMLHttpRequest";
	})
	.controller("home", function($scope, $http) {
		$http.get("/resources").success(function(model) {
			$scope.greeting = model;
		});
	})
	.controller("navigation", function($rootScope, $scope, $http, $location) {

	});
