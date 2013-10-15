'use strict';

var gardenApp = angular.module('gardenApp', []);
/* Controllers */

function MushroomListCtrl($scope, $http) {

  $http.get('/mushrooms.json').success(function(data) {
    $scope.mushrooms = data;
  });
}

gardenApp.controller('MushroomListCtrl', ['$scope', '$http', MushroomListCtrl]);

angular.module('farmStatsApp', []).controller('MushroomListCtrl', MushroomListCtrl);
