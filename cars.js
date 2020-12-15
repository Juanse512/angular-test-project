var app = angular.module("carsApp", ["ngRoute"]);
app.controller('carsCtrl', function($scope, $http) {
  $scope.sortBy = "Brand";
  $http.get("carlist.php").then(function(response) {
    $scope.carList = response.data.list;
  });
  $scope.changeSort = function (x) {
    $scope.sortBy = x;
  }
});
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "index.html"
    })
    .when("/compare", {
        templateUrl : "compare.html"
    })
});
