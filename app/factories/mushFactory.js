"use strict";
console.log("hey mushFactory");

app.factory("mushFactory", function($q, $http) {
	let getShrooms = () => {
		return $q((resolve, reject) => {
			$http.get("https://mushroom-mania-74ff2.firebaseio.com/.json")
			.then((shroomData) => {
				let shroomCollection = shroomData.data;
				console.log("shroomCollection", shroomCollection);
				resolve(shroomCollection.mushrooms);
			})
			.catch((error) => {
				reject(error);
			});
		});
	};
	return {getShrooms};
});
