// create secret number

var secretNumber = 4;

//ask user for guess

var guess = Number(prompt("Guess a number"));

// //or more explicitly, var stringGuess =prompt("Guess a number");
// //var guess = Number(stringGuess);

// //check if guess is right

if(guess === secretNumber) {
	alert("YOU GOT IT RIGHT!");
}

// //otherwise, check if higher

else if(guess > secretNumber) {
	alert("Your guess is too high. Guess again.");
}

else {
	alert("Your guess is too low. Guess again.");
}

