"use strict";

define(["angularAMD", "angular-route", "leaflet"], function(angularAMD, angularRoute, leaflet) {
    // TODO host images locally
    leaflet.Icon.Default.imagePath = 'http://cdn.leafletjs.com/leaflet-0.7.3/images';

	var app = angular.module("webapp", [ "ngRoute" ])
    	.config(function($routeProvider, $httpProvider) {
    		$routeProvider.when("/", angularAMD.route({
    			templateUrl: 	"map.html",
    			controller: 	"map",
    			controllerUrl:	"controllers/map"
    		}))
    		.when("/login", angularAMD.route({
    			templateUrl: 	"login.html",
    			controller: 	"login"
    		}))
    		.otherwise("/");

    		$httpProvider.defaults.headers.common[ "X-Requested-With" ] = "XMLHttpRequest";
    	})
    	.controller("login", function($rootScope, $scope, $http, $location) {

    	});

    return angularAMD.bootstrap(app);
});