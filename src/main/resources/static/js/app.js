"use strict";

define(["angularAMD", "angular-route"], function(angularAMD) {

	var app = angular.module("webapp", [ "ngRoute" ])
    	.config(function($routeProvider, $httpProvider) {
    		$routeProvider.when("/", angularAMD.route({
    			templateUrl: 	"map.html",
    			controller: 	"map",
    			controllerUrl:	"map"
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