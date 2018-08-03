var wins = 0;
var losses = 0;
var guessesLeft = 12;
var lettersGuessed = [];
var blankWord = [];
var holder = [];
var wordChoices = ["banana","passionfruit","orange","mango","grapefruit","kiwi"];


// FUNCTIONS

// randomly choose word from wordChoices
function wordGen() {
    randomWord = wordChoices[Math.floor(Math.random() * wordChoices.length)];
}

// initial game setup
// uses the random word to fill blankWord array with blank spaces
function setUp() {
    wordGen();
    document.getElementById("currentWordLength").textContent = randomWord.length;
    for (var i = 0; i < randomWord.length; i++) {
        blankWord.push("_");
    }
    document.getElementById("currentWord").textContent = blankWord.join(" ");
}

// reset game to initial state
function reSet() {
    lettersGuessed = [];
    holder = [];
    blankWord = [];
    guessesLeft = 12;
    wordGen();
    setUp();
}


// SET UP PAGE
setUp();


// GAME START
document.onkeyup = function(event) {
    var userGuess = event.key.toLowerCase();

    // determines if the letter guessed is in the random word
    // if yes, replaces corresponding blank space in blankWord with the guessed letter
    for (var i = 0; i < randomWord.length; i++) {
        if (userGuess === randomWord[i]) {
            blankWord.splice(i,1,randomWord[i]);
            holder.push(randomWord[i]);
            if (holder.length == randomWord.length) {
                wins++;
                reSet();
            }
            document.getElementById("currentWord").textContent = blankWord.join(" ")
        } 
    }

    // if the user's guess is unique
    if (lettersGuessed.indexOf(userGuess) == -1 && holder.indexOf(userGuess) == -1) {
        lettersGuessed.push(userGuess);
        guessesLeft--;
    }

    if (guessesLeft == 0) {
        losses++;
        guessesLeft = 12;
        reSet();
    }

    document.getElementById("wins").textContent = wins;
    document.getElementById("losses").textContent = losses;
    document.getElementById("guessesLeft").textContent = guessesLeft;
    document.getElementById("lettersGuessed").textContent = lettersGuessed.join(" ");

}