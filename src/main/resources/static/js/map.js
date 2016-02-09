"use strict";

define([ "app", "leaflet" ], function(app, leaflet) {
	// Note we have not wrapped angular into any module loader at this point, we should!
	app.controller("map", function($scope, $http) {
        var map = leaflet
            .map("map")
            .setView([61.50, 23.7667], 13);

        L.tileLayer('https://api.tiles.mapbox.com/v4/mapbox.streets/{z}/{x}/{y}.png?access_token={accessToken}', {
            maxZoom: 18,
            accessToken: "pk.eyJ1IjoibWlrYXR1cnVuZW4iLCJhIjoiY2lrZHNrY3piMDAyOXRybHl6cWFoY2VociJ9.gLeO3EY36ZGkH8tqbXLg8g"
        })
        .addTo(map);

		$http.get("/resources").success(function(model) {
			$scope.greeting = model;
		});

        var TIMEOUT = 5000;
        var pins = {};

        var getBusPins = function() {
            $http.post("bus", {}).success(function(model) {
                console.log(model.body);
                model.body.forEach(function(bus) {
                    console.log(bus.monitoredVehicleJourney.vehicleLocation);
                    var pinModel = {
                        id: bus.monitoredVehicleJourney.vehicleRef,
                        pin: new leaflet.Marker({
                            lat: bus.monitoredVehicleJourney.vehicleLocation.latitude,
                            lon: bus.monitoredVehicleJourney.vehicleLocation.longitude
                        })
                    };

                    pins[pinModel.id] = pinModel;
                });

                console.log(pins);
                Object.keys(pins).forEach(function(key) {
                    pins[key].pin.addTo(map);
                });

                setTimeout(function() { getBusPins(); }, TIMEOUT);
            })
            .error(function(error) {
                setTimeout(function() { getBusPins(); }, TIMEOUT);
                console.log(error);
            });
        };

        getBusPins();
	});
})

