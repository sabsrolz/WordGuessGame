//initialize our variables
var count = 0;
const wordsArray = ["Sabrina", "Rolz", "Sandoval"]; //stores words that will come up in game
//var currentWord = [];
//var updatedWord = []; //word that will be displayed to player as they guess letters
var indexGuess; //integer picked by player
var wordSelected; //word selected from array of words
var playerGuess; //character selected by player
var GuessedLetters = []; //array that will store letters already selected by player

function empty_word(word) {
  for (let x = 0; x < word.length; x++) {
    let currentWord = [];
    currentWord.push("_ ");
  }
  return currentWord;
}

function startGame() {
  // for (let wordinArray = 0; wordinArray < wordsArray.length; wordinArray++) {
  wordSelected = wordsArray[count]; //stores word selected from array
  currentWord = empty_word(wordSelected);

  document.getElementById("word_progress").innerHTML = currentWord;
  count++;
}

document.getElementById("startButton").addEventListener("click", startGame);

//function that takes keyboard input from player and displays under letters guessed

//main outer loop in game that will iterate for every new word
if (currentWord.includes("_ ")) {
  //document.getElementById("word_progress").innerHTML = currentWord;
  document.addEventListener("keyup", playerGuesses);
  function playerGuesses(event) {
    playerGuess = event.key;
    document.getElementById("current_letter").innerHTML = playerGuess;

    for (let char = 0; char < wordSelected.length; char++) {
      if (wordSelected[char] === playerGuess) {
        currentWord[char] = playerGuess;
        //updatedWord.push(playerGuess);
      } else {
        currentWord[char] = "_ ";
        //updatedWord.push("_ ");
      }
      document.getElementById("word_progress").innerHTML = currentWord;
    }
  }
} else {
  console.log("end");
}
