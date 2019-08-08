const wordsArray = ["Sabrina"]; //stores words that will come up in game
var currentWord = []; //word that will be displayed to player as they guess letters
var wordSelected; //word selected from array of words
var playerGuess = "a"; //character selected by player
var index_array = []; //stores indeces of guessed letter
var GuessedLetters = []; //array that will store letters already selected by player

//function that will create an "empty" array with the number of characters in word selected
function empty_word(word) {
  for (let x = 0; x < word.length; x++) {
    currentWord.push("_ ");
  }
  return currentWord;
  console.log(currentWord); //testing purposes
}

document.addEventListener("keydown", playerGuesses);
function playerGuesses(event) {
  playerGuess = event.key;

  let letter_output = document.createElement("span");
  letter_output.innerHTML = key_input + "<br/>";
  console.log(key_input);
  document.getElementById("output").appendChild(letter_output);
  //  console.log(el);
}

//function that will replace a character in a string
// function replaceAt(string, index, replace) {
// console.log(
// string.substring(0, index) + replace + string.substring(index + 1)
//);
//}

//main outer loop in game that will iterate for every new word
for (let wordinArray = 0; wordinArray < wordsArray.length; wordinArray++) {
  wordSelected = wordsArray[wordinArray]; //stores word selected from array
  empty_word(wordSelected); //calls function to create empty display
  // currentWord = currentWord.repeat(wordSelected.length);

  for (let char = 0; char < wordSelected.length; char++) {
    GuessedLetters.push(playerGuess);
    //loop that checks if player's guess is in word selected
    if (wordSelected[char] === playerGuess) {
      index_array.push(char); //appends index to array of letter locations
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
// for (let char = 0; char < wordSelected.lenght; char++) {}
//test function
