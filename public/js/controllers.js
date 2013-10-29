'use strict';


/* Controllers */

function MushroomListCtrl($rootScope, Mushroom) {
  $rootScope.mushrooms = Mushroom.query();
  
   $rootScope.selectMushroom = function (id) {
		console.log(id);
		$rootScope.mushroomId = id;
        $rootScope.mushroom = _.where($rootScope.mushrooms, {id: $rootScope.mushroomId})[0];
    }
	
    $rootScope.newMushroom = function () {
        $rootScope.mushroom = new Mushroom();
    }
	
	 $rootScope.saveMushroom = function () {
        if ($rootScope.mushroom.id == null) {
            $rootScope.mushrooms.push($rootScope.mushroom);
			$rootScope.mushroom.$save();
        }
        else {
            Mushroom.update({mushroomId: $rootScope.mushroom.id}, $rootScope.mushroom, function (data) {
            });
        }
    }

    $rootScope.completeMushroom = function (id) {
        Mushroom.delete({mushroomId: id}, function () {
            $rootScope.mushrooms = _.without($rootScope.mushrooms, $rootScope.mushroom);
        });
    }
}

function MushroomDetailCtrl($rootScope, Mushroom) {
}

gardenApp.controller('MushroomListCtrl', ['$rootScope', 'Mushroom', MushroomListCtrl])
gardenApp.controller('MushroomDetailCtrl', ['$rootScope', 'Mushroom', MushroomDetailCtrl]);

function PlantListCtrl($scope, Plant) {
	$scope.plants = Plant.query();
	$scope.selectPlant = function (id) {
		console.log(id);
        $scope.plant = _.where($scope.plants, {id: id})[0];
    }
	
    $scope.newPlant = function () {
        $scope.plant = new Plant();
    }
	
	 $scope.savePlant = function () {
        if ($scope.plant.id == null) {
            $scope.plants.push($scope.plant);
			$scope.plant.$save();
        }
        else {
            Plant.update({plantId: $scope.plant.id}, $scope.plant, function (data) {
            });
        }
    }

    $scope.completePlant = function (id) {
        Plant.delete({plantId: id}, function () {
            $scope.plants = _.without($scope.plants, $scope.plant);
        });
    }
}

gardenApp.controller('PlantListCtrl', ['$scope', 'Plant', PlantListCtrl])