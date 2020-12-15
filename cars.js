function myFunction() {
  var x = document.getElementById("demo");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }
}
// Get the modal
var modal = document.getElementById('id01');

function modal() {
  document.body.style.overflow = "hidden";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

var app = angular.module("carsApp", ["ngRoute"]);
app.controller('carsCtrl', function($scope, $http) {
  $scope.sortBy = "Brand";
  $scope.brandColor = "green";
  $scope.modelColor = "black";
  $scope.countryColor = "black";
  $http.get("carlist.php").then(function(response) {
    $scope.carList = response.data.list;
  });
  $scope.changeSort = function (x) {
    $scope.sortBy = x;
    if(x == 'Brand'){
      $scope.brandColor = "green";
      $scope.modelColor = "black";
      $scope.countryColor = "black";
    }else{
      if(x == 'Model'){
        $scope.brandColor = "black";
        $scope.modelColor = "green";
        $scope.countryColor = "black";
      }else{
        $scope.brandColor = "black";
        $scope.modelColor = "black";
        $scope.countryColor = "green";
      }
    }
  }
  $scope.selectInfo = function (x){
    $scope.selectedCar = x;
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
