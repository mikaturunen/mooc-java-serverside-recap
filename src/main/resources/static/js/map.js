"use strict";

define([ "app", "leaflet" ], function(app, leaflet) {
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

        var map = leaflet
            .map("map")
            .setView([61.50, 23.7667], 13);

        L.tileLayer('https://api.tiles.mapbox.com/v4/mapbox.streets/{z}/{x}/{y}.png?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
            maxZoom: 18,
            accessToken: "pk.eyJ1IjoibWlrYXR1cnVuZW4iLCJhIjoiY2lrZHNrY3piMDAyOXRybHl6cWFoY2VociJ9.gLeO3EY36ZGkH8tqbXLg8g"
        })
        .addTo(map);

	});
})

