# Word-Guess-Game
Homework 3, recommended

PSEUDOCODE

1. press any key to get started
2. generate random word choice from array
3. set user letter guess
4. determine if user letter guess is contained in random word choice
5.      if yes, push that letter to proper position in blank array
6.      if word choice array is full, wins++
7.      if no, guesses left-- & push to letters already guessed
8. if guesses left = 0, losses++, letters already guessed cleared, new random word choice generated
