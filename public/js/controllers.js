'use strict';


/* Controllers */

function MushroomListCtrl($scope, Mushroom) {
  $scope.mushrooms = Mushroom.query();
  
   $scope.selectMushroom = function (id) {
		console.log(id);
        $scope.mushroom = _.where($scope.mushrooms, {id: id})[0];
    }
	
    $scope.newMushroom = function () {
        $scope.mushroom = new Mushroom();
    }
	
	 $scope.saveMushroom = function () {
        if ($scope.mushroom.id == null) {
            $scope.mushrooms.push($scope.mushroom);
			$scope.mushroom.$save();
        }
        else {
            Mushroom.update({mushroomId: $scope.mushroom.id}, $scope.mushroom, function (data) {
            });
        }
    }

    $scope.completeMushroom = function (id) {
        Mushroom.delete({mushroomId: id}, function () {
            $scope.mushrooms = _.without($scope.mushrooms, $scope.mushroom);
        });
    }
}

function MushroomDetailCtrl($scope, $routeParams, Mushroom) {
  $scope.mushroom = Mushroom.get({mushroomId: $routeParams.mushroomId}, function(mushroom) {
   
  });
}

gardenApp.controller('MushroomListCtrl', ['$scope', 'Mushroom', MushroomListCtrl])
gardenApp.controller('MushroomDetailCtrl', ['$scope', '$routeParams', 'Mushroom', MushroomDetailCtrl]);

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