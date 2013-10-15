'use strict';

/* Controllers */

function MushroomListCtrl($scope, $http) {

  $http.get('/mushrooms.json').success(function(data) {
    $scope.mushrooms = data;
  });
}

angular.module('farmStatsApp', []).controller('MushroomListCtrl', MushroomListCtrl);
