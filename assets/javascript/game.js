var wins = 0;
var losses = 0;
var guessesLeft = 10;
var lettersGuessed = [];
var blankWord = [];

var wordChoices = ["banana","passionfruit","orange","mango"];

document.onkeyup = function(event) {
    var userGuess = event.key.toLowerCase();
    var randomWord = wordChoices[Math.floor(Math.random() * wordChoices.length)];
    console.log(randomWord);
    var numberLetters = randomWord.length;
    var blankWord = [];

    for (var i = 0; i < randomWord.length; i++) {
        if (userGuess == randomWord[i]) {
            blankWord.splice(i, 0, userGuess);
            console.log(blankWord);
        }
    }
    
    for (var i = 0; i < randomWord.length; i++)
        if (userGuess != randomWord[i]) {
            guessesLeft--;
            lettersGuessed.push(userGuess);
            console.log(lettersGuessed);
        }

    // if (guessesLeft = 0) {
    //     losses++;
    //     lettersGuessed = [];
    // }


    // for (var i = 0; i <= numberLetters; i++) {
    //     if (userGuess == randomWord[i]) {
    //         blankWord.push(userGuess);
    //         console.log(blankWord);
    //     }
    // }

    // if () {
    //     guessesLeft--;
    //     lettersGuessed.push(userGuess);
    // }

    document.getElementById("wins").textContent = wins;
    document.getElementById("losses").textContent = losses;
    document.getElementById("guessesLeft").textContent = guessesLeft;
    document.getElementById("lettersGuessed").textContent = lettersGuessed;
}