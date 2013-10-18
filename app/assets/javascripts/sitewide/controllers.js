'use strict';

var gardenApp = angular.module('gardenApp', []);
/* Controllers */

function MushroomListCtrl($scope, $http) {
  $http.get('/mushrooms.json').success(function(data) {
    $scope.mushrooms = data;
  });
}

gardenApp.controller('MushroomListCtrl', ['$scope', '$http', MushroomListCtrl])

function PlantListCtrl($scope, $http) {
  $http.get('/plants.json').success(function(data) {
    $scope.plants = data;
  });
}

gardenApp.controller('PlantListCtrl', ['$scope', '$http', PlantListCtrl])