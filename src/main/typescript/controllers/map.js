"use strict";
define(["app", "leaflet"], (app, leaflet) => {
    app.controller("map", ($scope, $http) => {
        const map = leaflet
            .map("map")
            .setView([61.50, 23.7667], 13);
        L.tileLayer('https://api.tiles.mapbox.com/v4/mapbox.streets/{z}/{x}/{y}.png?access_token={accessToken}', {
            maxZoom: 18,
            accessToken: "pk.eyJ1IjoibWlrYXR1cnVuZW4iLCJhIjoiY2lrZHNrY3piMDAyOXRybHl6cWFoY2VociJ9.gLeO3EY36ZGkH8tqbXLg8g"
        })
            .addTo(map);
        $http.get("/resources").success((model) => {
            $scope.greeting = model;
        });
        const TIMEOUT = 5000;
        let pins = {};
        const getBusPins = () => {
            $http.post("bus", {}).success((model) => {
                console.log(model.body);
                model.body.forEach((bus) => {
                    console.log(bus.monitoredVehicleJourney.vehicleLocation);
                    let pinModel = {
                        id: bus.monitoredVehicleJourney.vehicleRef,
                        pin: new leaflet.Marker({
                            lat: bus.monitoredVehicleJourney.vehicleLocation.latitude,
                            lon: bus.monitoredVehicleJourney.vehicleLocation.longitude
                        })
                    };
                    pins[pinModel.id] = pinModel;
                });
                console.log(pins);
                Object.keys(pins).forEach(key => pins[key].pin.addTo(map));
                setTimeout(() => { getBusPins(); }, TIMEOUT);
            })
                .error((error) => {
                setTimeout(() => { getBusPins(); }, TIMEOUT);
                console.log(error);
            });
        };
        getBusPins();
    });
});
