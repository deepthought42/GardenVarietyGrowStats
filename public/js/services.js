'use strict';

/* Services */

var servicesModule = angular.module('farmStatsServices', ['ngResource']);
servicesModule.factory('Mushroom', function($resource){
		return $resource(
			'mushrooms/:Id', 
			{}, 
			{
				update: {method: "PUT"},
				query: {method:'GET', params:{mushroomId:'mushrooms'}, isArray:true}
			}
	)});
	
servicesModule.factory('Plant', function($resource){
		return $resource(
			'plants/:Id', 
			{}, 
			{
				update: {method: "PUT"},
				query: {method:'GET', params:{plantId:'plants'}, isArray:true}
			}
	)});
	
