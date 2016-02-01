
angular.module("tampereCoaches", [])
	.controller("home", function($scope, $http) {
		$http.get("/resources").success(function(model) {
			$scope.greeting = model;
		});
	});