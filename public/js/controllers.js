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

function PlantListCtrl($scope, $http) {
  $http.get('/plants/plants.json').success(function(data) {
    $scope.plants = data;
  });
}

gardenApp.controller('PlantListCtrl', ['$scope', 'Plant', PlantListCtrl])