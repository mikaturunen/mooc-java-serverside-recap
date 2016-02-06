"use strict";

define([ "app" ], function(app) {
	// Note we have not wrapped angular into any module loader at this point, we should!
	app.controller("map", function($scope, $http) {
		$http.get("/resources").success(function(model) {
			$scope.greeting = model;
		});

		$http.post("bus", {}).success(function(model) {
			console.log(model);
		})
		.error(function(error) {
			console.log(error);
		});
	});
})

