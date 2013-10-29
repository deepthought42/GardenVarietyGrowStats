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

function PlantListCtrl($rootScope, Plant) {
	$rootScope.plants = Plant.query();
	
	$rootScope.selectPlant = function (id) {
        $rootScope.plant = _.where($rootScope.plants, {id: id})[0];
    }
	
    $rootScope.newPlant = function () {
        $rootScope.plant = new Plant();
    }
	
	 $rootScope.savePlant = function () {
        if ($rootScope.plant.id == null) {
            $rootScope.plants.push($rootScope.plant);
			$rootScope.plant.$save();
        }
        else {
            Plant.update({plantId: $rootScope.plant.id}, $rootScope.plant, function (data) {
            });
        }
    }

    $rootScope.completePlant = function (id) {
        Plant.delete({plantId: id}, function () {
            $rootScope.plants = _.without($scope.plants, $scope.plant);
        });
    }
}

function PlantDetailCtrl($rootScope, Plant) {
}

gardenApp.controller('PlantListCtrl', ['$rootScope', 'Plant', PlantListCtrl])
gardenApp.controller('PlantDetailCtrl', ['$rootScope', 'Plant', PlantDetailCtrl]);