
angular.module("hello", [])
	.controller("home", function($scope, $http) {
		$http.get("/resources").success(function(model) {
			$scope.greeting = model;
		});
	});