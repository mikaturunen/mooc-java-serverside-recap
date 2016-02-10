"use strict";

require.config({
    baseUrl: "/js",
    paths: {
        "angular": "//ajax.googleapis.com/ajax/libs/angularjs/1.2.16/angular.min",
        "angular-route": "//ajax.googleapis.com/ajax/libs/angularjs/1.2.16/angular-route.min",
        "angularAMD": "//cdn.jsdelivr.net/angular.amd/0.2.0/angularAMD.min",
        "leaflet": "http://cdn.leafletjs.com/leaflet/v0.7.7/leaflet"
    },
    shim: {
        "angularAMD": ["angular"],
        "angular-route": ["angular"]
    },
    deps: ["app"]
});