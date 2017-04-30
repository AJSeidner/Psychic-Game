var options = ["a", "b", "c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var wins= 0;
var losses= 0;
var guessesLeft= 9;
var guessesSoFar= [];


var computerGuess = options[Math.floor(Math.random()*options.length)];
	console.log(computerGuess);

document.onkeyup = function() {


	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	console.log(userGuess);

	if (guessesSoFar.indexOf(userGuess) === -1 && userGuess !== computerGuess) {
		guessesSoFar.push(" " + userGuess);
		document.getElementById("soFar").innerHTML = guessesSoFar;
	}

	
	
	 if (userGuess === computerGuess){
	 	
		wins++;
		document.getElementById("Wins").innerHTML = "Wins: " + wins;
		guessesLeft= 9;
		document.getElementById("Guesses-Left").innerHTML = "Guesses Left: " + guessesLeft;
		alert("You must be a psychic! The letter I was thinking of was '" + computerGuess + "'!");
		guessesSoFar= [];
		document.getElementById("soFar").innerHTML = guessesSoFar;
		computerGuess = options[Math.floor(Math.random()*options.length)];
		console.log(computerGuess);
		
	} else {
		guessesLeft--;
		document.getElementById("Guesses-Left").innerHTML = "Guesses Left: " + guessesLeft;

	}


	

	if (guessesLeft === 0){
		losses++;
		document.getElementById("Losses").innerHTML = "Losses: " + losses;
		guessesLeft= 9;
		document.getElementById("Guesses-Left").innerHTML = "Guesses Left: " + guessesLeft;
		guessesSoFar= [];
		document.getElementById("soFar").innerHTML = guessesSoFar;
		alert("A psychic you are not, the letter I was thinking of was '" + computerGuess + "'!");
		computerGuess = options[Math.floor(Math.random()*options.length)];
		console.log(computerGuess);
	}
	
}


		

	
