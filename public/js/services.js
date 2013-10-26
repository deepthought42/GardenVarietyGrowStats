'use strict';

/* Services */

angular.module('farmStatsServices', ['ngResource']).
    factory('Mushroom', function($resource){
		return $resource(
			'mushrooms/:Id', 
			{}, 
			{
				update: {method: "PUT"},
				query: {method:'GET', params:{mushroomId:'mushrooms'}, isArray:true}
			}
	)}).
    factory('Plant', function($resource){
		return $resource(
			'plants/:Id', 
			{}, 
			{
				update: {method: "PUT"},
				query: {method:'GET', params:{plantId:'plants'}, isArray:true}
			}
	)});;
	
