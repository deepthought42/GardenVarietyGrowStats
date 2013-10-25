'use strict';

/* App Module */

var gardenApp = angular.module('farmStatsApp', ['farmStatsServices']);
gardenApp.factory('_', function() {
  return window._; // underscore has been loaded before this script
 });