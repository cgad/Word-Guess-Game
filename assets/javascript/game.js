var wins = 0;
var losses = 0;
var guessesLeft = 12;
var lettersGuessed = [];
var blankWord = [];
var holder = [];
var wordChoices = ["banana","passionfruit","orange","mango"];

// var randomWord = wordChoices[Math.floor(Math.random() * wordChoices.length)];
// console.log(randomWord);


// GAME SETUP
// uses the random word to fill blankWord array with blank spaces
function setUp() {
    wordGen();
    for (var i = 0; i < randomWord.length; i++) {
        blankWord.push("_");
    }
    document.getElementById("currentWord").textContent = blankWord.join(" ");
}

function wordGen() {
    randomWord = wordChoices[Math.floor(Math.random() * wordChoices.length)];
    // console.log(randomWord);
}

function reSet() {
    lettersGuessed = [];
    holder = [];
    blankWord = [];
    guessesLeft = 12;
    wordGen();
    setUp();
}

// INITIAL SETUP
setUp();

// GAME START
// still need: letters already guessed to not update if letter already guessed
document.onkeyup = function(event) {
    var userGuess = event.key.toLowerCase();

    // determines if the letter guessed is in the random word
    // if yes, replaces corresponding blank space in blankWord with the guessed letter
    for (var i = 0; i < randomWord.length; i++) {
        if (userGuess === randomWord[i]) {
            // console.log("yes, in position " + i);
            blankWord.splice(i,1,randomWord[i]);
            holder.push(randomWord[i]);
            if (holder.length == randomWord.length) {
                wins++;
                reSet();
            }
            // console.log(blankWord);
            document.getElementById("currentWord").textContent = blankWord.join(" ")
        } 
    }

    // if the user's guess is unique
    if (lettersGuessed.indexOf(userGuess) == -1) {
        lettersGuessed.push(userGuess);
        guessesLeft--;
    }

    if (guessesLeft == 0) {
        losses++;
        guessesLeft = 12;
        reSet();
    }

    // console.log("letters guessed: " + lettersGuessed);
    // console.log("guesses left: " + guessesLeft);
    // console.log("losses: " + losses);
    // console.log(blankWord);

    document.getElementById("wins").textContent = wins;
    document.getElementById("losses").textContent = losses;
    document.getElementById("guessesLeft").textContent = guessesLeft;
    document.getElementById("lettersGuessed").textContent = lettersGuessed;

}