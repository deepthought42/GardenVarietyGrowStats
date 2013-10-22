'use strict';

/* Controllers */

function MushroomListCtrl($scope, $http) {
  $http.get('/mushrooms.json').success(function(data) {
    $scope.mushrooms = data;
  });
}

function MushroomDetailCtrl($scope, $routeParams) {
  $scope.mushroomId = $routeParams.mushroomId;
}
  
gardenApp.controller('MushroomListCtrl', ['$scope', '$http', MushroomListCtrl])
gardenApp.controller('MushroomDetailCtrl', ['$scope', '$routeParams', MushroomDetailCtrl]);

function PlantListCtrl($scope, $http) {
  $http.get('/plants.json').success(function(data) {
    $scope.plants = data;
  });
}

gardenApp.controller('PlantListCtrl', ['$scope', '$http', PlantListCtrl])