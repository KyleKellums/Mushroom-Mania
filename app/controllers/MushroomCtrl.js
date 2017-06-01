"use strict";
console.log("hello MushroomCtrl"); //this loads first, making the call to mushFactory.js to load the JSON file from FB

app.controller("MushroomCtrl", function($scope, mushFactory) {

	let thoseShrooms = [];
	mushFactory.getShrooms() //calls the function on mushFactory.js
	.then(function(shroomCollection) { //shroomCollection is returned from mushFactory.js' .getShrooms
		for(let prop in shroomCollection){ //iterate through the object to create an array
			thoseShrooms.push(shroomCollection[prop]);
		}
		$scope.shrooms = thoseShrooms; //put the array into $scope; access it with "shrooms"
		console.log("$scope.shrooms", $scope.shrooms);
	});
});