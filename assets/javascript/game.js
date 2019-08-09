//initialize our variables
const wordsArray = ["Sabrina"]; //stores words that will come up in game
var currentWord = [];
var updatedWord = []; //word that will be displayed to player as they guess letters
var wordSelected; //word selected from array of words
var playerGuess; //character selected by player
var GuessedLetters = []; //array that will store letters already selected by player

function empty_word(word) {
  for (let x = 0; x < word.length; x++) {
    currentWord.push("_ ");
  }
  return currentWord;
}
//function that takes keyboard input from player and displays under letters guessed

document.addEventListener("keyup", playerGuesses);
function playerGuesses(event) {
  playerGuess = event.key;
  document.getElementById("current_letter").innerHTML = playerGuess;

  //main outer loop in game that will iterate for every new word
  for (let wordinArray = 0; wordinArray < wordsArray.length; wordinArray++) {
    wordSelected = wordsArray[wordinArray]; //stores word selected from array
    empty_word(wordSelected);
    //document.getElementById("word_progress").innerHTML = currentWord;

    for (let char = 0; char < wordSelected.length; char++) {
      if (wordSelected[char] === playerGuess) {
        updatedWord.push(playerGuess);
      } else {
        updatedWord.push("_ ");
        document.getElementById("word_progress").innerHTML = updatedWord;
      }
    }
  }
}
