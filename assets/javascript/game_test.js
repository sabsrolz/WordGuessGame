//initialize our variables
const wordsArray = ["Sabrina", "Rolz", "Sandoval"]; //stores words that will come up in game
var currentWord = [];
var updatedWord = []; //word that will be displayed to player as they guess letters
var wordSelected; //word selected from array of words
var playerGuess; //character selected by player
var index_array = []; //stores indeces of guessed letter
var GuessedLetters = []; //array that will store letters already selected by player
var randomWord;
var randomIndex;
var pickedWords = [];

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
  //let letter_output = document.createElement("span");
  document.getElementById("current_letter").innerHTML = playerGuess;

  randomIndex = Math.floor(Math.random() * (wordsArray.length + 1));

  randomWord = wordsArray[randomIndex];

  //main outer loop in game that will iterate for every new word
  for (let wordinArray = 0; wordinArray < wordsArray.length; wordinArray++) {
    wordSelected = wordsArray[wordinArray]; //stores word selected from array
    empty_word(wordSelected);
    document.getElementById("word_progress").innerHTML = currentWord;

    console.log("Sabrina");
    for (let char = 0; char < wordSelected.length; char++) {
      //GuessedLetters.push(playerGuess);

      //loop that checks if player's guess is in word selected
      if (wordSelected[char] === playerGuess) {
        index_array.push(char);
        console.log(index_array);
        for (let x = 0; x < index_array.length; x++) {
          //loops through index array and replaces blank with guessed letter
          currentWord[index_array[x]] = playerGuess;
          var joined_word = currentWord.join(); //transforms array to string
          console.log(currentWord);
          if (joined_word.includes("_ ")) {
            //check if joined word still has empty spaces
            alert("Guess another letter");
          } else {
            alert("You have guessed the correct word! " + joined_word);
          }
        }
      }
    }
  }
}

//function that will create an "empty" array with the number of characters in word selected

//game starts
