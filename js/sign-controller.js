(function() {

	var constants = LightScrollerConstants();

	var app = angular.module('LightScroller');

	app.controller('SignController', ['$scope', function($scope){
		
		var letterWidth = 5;
		var spaceWidth = 2;
		var letterDisplayCount = 14;
		var height = 7;

		// var letterWidth = 1;
		// var spaceWidth = 1;
		// var letterDisplayCount = 14;
		// var height = 7;

		$scope.lightsArray = [];

		function getTotalWidth(){

			// return (letterWidth * letterDisplayCount) + (spaceWidth * (letterDisplayCount - 1));
			return 5;

		}

		function initializeLightsArray(){

			var width = getTotalWidth();
			console.log(width);
			console.log(height);

			var lightsArray = [];

			for(var i = 0; i < height; i++){
				rowArray = [];
				for(var j = 0; j < width; j++){
					// rowArray.push('light-off');
					rowArray.push(constants.LetterArrays.A[i][j] === 0 ? 'lights-off' : 'lights-on');
				}
				lightsArray.push(rowArray);
			}

			console.log(lightsArray);

			$scope.lightsArray = lightsArray;

		}

		initializeLightsArray();

	}]);

}());


function LightScrollerConstants(){

	return {

		LetterArrays: {

			A: [
				[0,0,1,0,0],
				[0,1,0,1,0],
				[1,0,0,0,1],
				[1,0,0,0,1],
				[1,1,1,1,1],
				[1,0,0,0,1],
				[1,0,0,0,1]
				]

		}
	}

}