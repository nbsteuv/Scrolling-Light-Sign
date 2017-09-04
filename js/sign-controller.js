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
		$scope.message = "Hello World";
		$scope.getLightClass = getLightClass;

		initializeLightsArray();
		var messageArray = createMessageArray("he");
		$scope.lightsArray = messageArray;

		function getTotalWidth(){

			return (letterWidth * letterDisplayCount) + (spaceWidth * (letterDisplayCount - 1));

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
					rowArray.push(constants.LetterArrays["Z"][i][j] === 0 ? 'lights-off' : 'lights-on');
				}
				lightsArray.push(rowArray);
			}

			console.log(lightsArray);

			$scope.lightsArray = lightsArray;

		}

		function createMessageArray(message){

			var messageArray = [];

			var spaceArray = createSpaceArray();

			for(var i = 0; i < message.length; i++){
				var character = message[i].toUpperCase();
				var characterArray = constants.LetterArrays[character];

				if(characterArray === undefined){
					characterArray = constants.LetterArrays['Empty'];
				}

				for(var j = 0; j < letterWidth; j++){
					var rowArray = [];
					for(var k = 0; k < height; k++){
						rowArray.push(characterArray[k][j]);
					}
					messageArray.push(rowArray);
				}

				for(var j = 0; j < spaceArray.length; j++){
					messageArray.push(spaceArray[j]);
				}
			}

			console.log(messageArray);

			return messageArray;
		}

		function createSpaceArray(){

			var spaceArray = [];

			for(var i = 0; i < spaceWidth; i++){
				var rowArray = [];
				for(var j = 0; j < height; j++){
					rowArray.push(0);
				}
				spaceArray.push(rowArray);
			}

			return spaceArray;
		}

		function getLightClass(lightSwitch){
			if(lightSwitch === 1){
				return 'lights-on';
			} else {
				return 'lights-off';
			}
		}

		

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
				],

			B: [
				[1,1,1,1,0],
				[1,0,0,0,1],
				[1,0,0,0,1],
				[1,1,1,1,0],
				[1,0,0,0,1],
				[1,0,0,0,1],
				[1,1,1,1,0]
				],

			C: [
				[0,0,1,1,1],
				[0,1,0,0,0],
				[1,0,0,0,0],
				[1,0,0,0,0],
				[1,0,0,0,0],
				[0,1,0,0,0],
				[0,0,1,1,1]
				],

			D: [
				[1,1,1,1,0],
				[1,0,0,0,1],
				[1,0,0,0,1],
				[1,0,0,0,1],
				[1,0,0,0,1],
				[1,0,0,0,1],
				[1,1,1,1,0]
				],

			E: [
				[1,1,1,1,1],
				[1,0,0,0,0],
				[1,0,0,0,0],
				[1,1,1,1,0],
				[1,0,0,0,0],
				[1,0,0,0,0],
				[1,1,1,1,1]
				],

			F: [
				[1,1,1,1,1],
				[1,0,0,0,0],
				[1,0,0,0,0],
				[1,1,1,1,0],
				[1,0,0,0,0],
				[1,0,0,0,0],
				[1,0,0,0,0]
				],

			G: [
				[0,1,1,1,1],
				[1,0,0,0,0],
				[1,0,0,0,0],
				[1,0,1,1,1],
				[1,0,0,0,1],
				[1,0,0,0,1],
				[0,1,1,1,0]
				],

			H: [
				[1,0,0,0,1],
				[1,0,0,0,1],
				[1,0,0,0,1],
				[1,1,1,1,1],
				[1,0,0,0,1],
				[1,0,0,0,1],
				[1,0,0,0,1]
				],

			I: [
				[1,1,1,1,1],
				[0,0,1,0,0],
				[0,0,1,0,0],
				[0,0,1,0,0],
				[0,0,1,0,0],
				[0,0,1,0,0],
				[1,1,1,1,1]
				],

			J: [
				[0,0,0,0,1],
				[0,0,0,0,1],
				[0,0,0,0,1],
				[0,0,0,0,1],
				[1,0,0,0,1],
				[1,0,0,0,1],
				[0,1,1,1,0]
				],

			K: [
				[1,0,0,0,1],
				[1,0,0,1,0],
				[1,0,1,0,0],
				[1,1,0,0,0],
				[1,0,1,0,0],
				[1,0,0,1,0],
				[1,0,0,0,1]
				],

			L: [
				[1,0,0,0,0],
				[1,0,0,0,0],
				[1,0,0,0,0],
				[1,0,0,0,0],
				[1,0,0,0,0],
				[1,0,0,0,0],
				[1,1,1,1,1]
				],

			M: [
				[1,0,0,0,1],
				[1,1,0,1,1],
				[1,0,1,0,1],
				[1,0,0,0,1],
				[1,0,0,0,1],
				[1,0,0,0,1],
				[1,0,0,0,1]
				],

			N: [
				[1,0,0,0,1],
				[1,0,0,0,1],
				[1,1,0,0,1],
				[1,0,1,0,1],
				[1,0,0,1,1],
				[1,0,0,0,1],
				[1,0,0,0,1]
				],

			O: [
				[0,1,1,1,0],
				[1,0,0,0,1],
				[1,0,0,0,1],
				[1,0,0,0,1],
				[1,0,0,0,1],
				[1,0,0,0,1],
				[0,1,1,1,0]
				],

			P: [
				[1,1,1,1,0],
				[1,0,0,0,1],
				[1,0,0,0,1],
				[1,1,1,1,0],
				[1,0,0,0,0],
				[1,0,0,0,0],
				[1,0,0,0,0]
				],

			Q: [
				[0,1,1,1,0],
				[1,0,0,0,1],
				[1,0,0,0,1],
				[1,0,0,0,1],
				[1,0,1,0,1],
				[1,0,0,1,1],
				[0,1,1,1,1]
				],

			R: [
				[1,1,1,1,0],
				[1,0,0,0,1],
				[1,0,0,0,1],
				[1,1,1,1,0],
				[1,0,1,0,0],
				[1,0,0,1,0],
				[1,0,0,0,1]
				],

			S: [
				[0,1,1,1,1],
				[1,0,0,0,0],
				[1,0,0,0,0],
				[0,1,1,1,0],
				[0,0,0,0,1],
				[0,0,0,0,1],
				[1,1,1,1,0]
				],

			T: [
				[1,1,1,1,1],
				[0,0,1,0,0],
				[0,0,1,0,0],
				[0,0,1,0,0],
				[0,0,1,0,0],
				[0,0,1,0,0],
				[0,0,1,0,0]
				],

			U: [
				[1,0,0,0,1],
				[1,0,0,0,1],
				[1,0,0,0,1],
				[1,0,0,0,1],
				[1,0,0,0,1],
				[1,0,0,0,1],
				[0,1,1,1,0]
				],

			V: [
				[1,0,0,0,1],
				[1,0,0,0,1],
				[1,0,0,0,1],
				[1,0,0,0,1],
				[1,0,0,0,1],
				[0,1,0,1,0],
				[0,0,1,0,0]
				],

			W: [
				[1,0,0,0,1],
				[1,0,0,0,1],
				[1,0,0,0,1],
				[1,0,0,0,1],
				[1,0,1,0,1],
				[1,1,0,1,1],
				[1,0,0,0,1]
				],

			X: [
				[1,0,0,0,1],
				[1,0,0,0,1],
				[0,1,0,1,0],
				[0,0,1,0,0],
				[0,1,0,1,0],
				[1,0,0,0,1],
				[1,0,0,0,1]
				],

			Y: [
				[1,0,0,0,1],
				[1,0,0,0,1],
				[0,1,0,1,0],
				[0,0,1,0,0],
				[0,0,1,0,0],
				[0,0,1,0,0],
				[0,0,1,0,0]
				],

			Z: [
				[1,1,1,1,1],
				[0,0,0,0,1],
				[0,0,0,1,0],
				[0,0,1,0,0],
				[0,1,0,0,0],
				[1,0,0,0,0],
				[1,1,1,1,1]
				],

			Empty: [
				[0,0,0,0,0],
				[0,0,0,0,0],
				[0,0,0,0,0],
				[0,0,0,0,0],
				[0,0,0,0,0],
				[0,0,0,0,0],
				[0,0,0,0,0]
				],

		}
	}

}