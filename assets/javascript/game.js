var wins = 0;
var losses = 0;
var guessesLeft = 12;
var lettersGuessed = [];
var blankWord = [];

var wordChoices = ["banana","passionfruit","orange","mango"];

var randomWord = wordChoices[Math.floor(Math.random() * wordChoices.length)];
console.log(randomWord);


// GAME SETUP
// uses the random word to fill blankWord array with blank spaces
function setUp() {
    for (var i = 0; i < randomWord.length; i++) {
        blankWord.push("_ ");
    }
    document.getElementById("currentWord").textContent = blankWord;

    // loop through blankWord and print each _ to screen
}
setUp();


// GAME START
// still need: letters already guessed to not update if letter already guessed
document.onkeyup = function(event) {
    var userGuess = event.key.toLowerCase();

    // if the user's guess is unique
    // if (lettersGuessed.indexOf(userGuess) == -1) {

        // determines if the letter guessed is in the random word
        // if yes, replaces corresponding blank space in blankWord with the guessed letter
        for (var i = 0; i < randomWord.length; i++) {
            if (userGuess === randomWord[i]) {
                console.log("yes, in position " + i);
                blankWord.splice(i,1,randomWord[i]);
                console.log(blankWord);
            } 
        }

        // FIX: can't print an array to the screen without the commas, instead have to loop through
        // document.getElementById("currentWord").textContent = blankWord;

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

    // }
}