"use strict";


define(["angularAMD", "angular-route", "leaflet"],
    (angularAMD: any, angularRoute: any, leaflet: any) => {

    // TODO host images locally
    leaflet.Icon.Default.imagePath = 'http://cdn.leafletjs.com/leaflet-0.7.3/images';

    const app = angular.module("webapp", [ "ngRoute" ])
        .config(($routeProvider: any, $httpProvider: any) => {
            $routeProvider.when("/", angularAMD.route({
                templateUrl:    "map.html",
                controller:     "map",
                controllerUrl:  "controllers/map"
            }))
            .when("/login", angularAMD.route({
                templateUrl:    "login.html",
                controller:     "login"
            }))
            .otherwise("/");

            $httpProvider.defaults.headers.common[ "X-Requested-With" ] = "XMLHttpRequest";
        })
        .controller("login", ($rootScope: any, $scope: any, $http: any, $location: any) => {
            //
        });

    return angularAMD.bootstrap(app);
});
