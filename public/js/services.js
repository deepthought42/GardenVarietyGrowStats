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
	)});