
var moduleName = "tampereCoaches";
var dependencies = [
	"ngRoute";
]

angular.module(moduleName, dependencies)
	.config(function($routeProvider, $httpProvider) {
		$routeProvider.when("/", {
			templateUrl: "greetings.html",
			controller: "home"
		})
		.when("/login", {
			templateUrl: "login.html",
			controller: "nagivation"
		})
		.otherwise("/");
	})
	.controller("home", function($scope, $http) {
		$http.get("/resources").success(function(model) {
			$scope.greeting = model;
		});
	})
	.controller("navigation", function($tooScope, $scope, $http, $location) {
		var authentication = function(credentials, callback) {
			var headers = credentials ?
				{ authorization: "Basic " + btoa(credentials.username + ":" + credentials.password) } :
				{ };

			$http.get("user", { headers: headers }).success(function(data) {
				$rootScope.authenticated = data.user ? true : false;
				callback && callback();
			})
			.error(function() {
				$rootScope.authenticated = false;
				callback && callback();
			});
		}

		authenticate();
		$scope.credentials = { };

		$scope.login = function() {
			authenticate($scope.credentials, function() {
				if ($rootScope.authenticated) {
					$location.path("/");
					$scope.error = false;
				} else {
					$location.path("/login");
					$scope.error = true;
				}
			});
		};
	});
