'use strict';

/* App Module */

var gardenApp = angular.module('gardenApp', []).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/mushrooms', {templateUrl: 'mushrooms/partials/mushroom-list.html',   controller: 'MushroomListCtrl'}).
      when('/mushrooms/:mushroomId', {templateUrl: 'mushrooms/partials/mushroom-detail.html', controller: 'MushroomDetailCtrl'}).
      otherwise({redirectTo: '/mushrooms'});
}]);