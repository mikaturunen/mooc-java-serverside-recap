
var moduleName = "tampereCoaches";
var dependencies = [
	"ngRoute"
];

angular.module(moduleName, dependencies)
	.config(function($routeProvider, $httpProvider) {
		$routeProvider.when("/", {
			templateUrl: "home.html",
			controller: "home"
		})
		.when("/login", {
			templateUrl: "login.html",
			controller: "navigation"
		})
		.otherwise("/");

		$httpProvider.defaults.headers.common[ "X-Requested-With" ] = "XMLHttpRequest";
	})
	.controller("home", function($scope, $http) {
		$http.get("/resources").success(function(model) {
			$scope.greeting = model;
		});
	})
	.controller("navigation", function($rootScope, $scope, $http, $location) {
		var authenticate = function(credentials, callback) {
			var headers = credentials ?
				{ authorization: "Basic " + btoa(credentials.username + ":" + credentials.password) } :
				{ };

			$http.get("user", { headers: headers }).success(function(data) {
				console.log("get user:", data);
				$rootScope.authenticated = data.name ? true : false;
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

		$scope.logout = function() {
			$http.post("logout", {}).success(function() {
				$rootScope.authenticated = false;
				$location.path("/");
			})
			.error(function(data) {
				console.log("Error, logout:", data);
				$rootScope.authenticated = false;
			})
		};
	});
