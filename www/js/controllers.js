angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('AnimalsCtrl', function($scope, Animals) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.animals = Animals.all();
  $scope.remove = function(animal) {
    Animals.remove(animal);
  };
  
})

.controller('AnimalDetailCtrl', function($scope, $stateParams, Animals) {
  $scope.animal = Animals.get($stateParams.animalId);
})

.controller('MapCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})


//my barcode scanner
.controller("ScanController", function($scope, $cordovaBarcodeScanner){
	
	$scope.scanBarcode = function(){
				var link = "#/tab/animals";
				alert(link);
				$( location ).attr("href", link);
		$cordovaBarcodeScanner.scan().then(function(barcodeData){
			//console.log("format"+ barcodeData.format);
			//alert(barcodeData.text);
			var scan = barcodeData.text;
			$( location ).attr("href", link);
			
		}, function(error){
			console.log("error"+ error);
		});
		
	}
	
});


