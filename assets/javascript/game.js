var wins = 0;
var losses = 0;
var guessesLeft = 12;
var lettersGuessed = [];
var blankWord = [];

var wordChoices = ["banana","passionfruit","orange","mango"];

var randomWord = wordChoices[Math.floor(Math.random() * wordChoices.length)];
console.log(randomWord);

function blankWordSetUp() {
    for (var i = 0; i < randomWord.length; i++) {
        currentWord = blankWord.push("_ ");
    }
    // document.getElementById("currentWord").textContent = currentWord;
}

blankWordSetUp();

document.onkeyup = function(event) {
    var userGuess = event.key.toLowerCase();

    for (var i = 0; i < randomWord.length; i++) {
        if (userGuess === randomWord[i]) {
            console.log("yes, in position " + i);
            blankWord.splice(i,1,randomWord[i]);
            console.log(blankWord);
        } 
        // if (userGuess != randomWord[i]) {
        //     lettersGuessed.push(userGuess);
        //     console.log("letters guessed: " + lettersGuessed);
        // }
    }
    guessesLeft--;
    lettersGuessed.push(userGuess);

    if (guessesLeft == 0) {
        losses++;
        guessesLeft = 12;
        lettersGuessed = [];
    }

    console.log("letters guessed: " + lettersGuessed);
    console.log("guesses left: " + guessesLeft);
    console.log("losses: " + losses);
    console.log(blankWord);

    document.getElementById("wins").textContent = wins;
    document.getElementById("losses").textContent = losses;
    document.getElementById("guessesLeft").textContent = guessesLeft;
    document.getElementById("lettersGuessed").textContent = lettersGuessed;
}

