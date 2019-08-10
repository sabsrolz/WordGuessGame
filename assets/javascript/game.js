var count = 0;
const wordsArray = [
  "banana",
  "birthdaycake",
  "blackberry",
  "bubblegum",
  "pecan",
  "caramel",
  "chocolate",
  "doublechocolate",
  "cookiedough",
  "chocolatechip",
  "peanutbutter",
  "mint",
  "chocolatetruffle",
  "coffee",
  "dulcedeleche",
  "cottoncandy",
  "frenchvanilla",
  "greentea",
  "hazelnut",
  "almondfudge",
  "lavender"
]; //stores words that will come up in game
var currentWord = [];
//var updatedWord = [];
//var indexGuess; //integer picked by player
var wordSelected; //word selected from array of words
var playerGuess; //character selected by player
let GuessedLetters;
var score = 0;
var letter_counter = 0;

function empty_word(word) {
  for (let x = 0; x < word.length; x++) {
    currentWord.push("_ ");
  }
  return currentWord;
}
//while (count < wordsArray.length) {
document.getElementById("startButton").addEventListener("click", startGame);
function startGame() {
  // for (let wordinArray = 0; wordinArray < wordsArray.length; wordinArray++) {
  wordSelected = wordsArray[count]; //stores word selected from array
  empty_word(wordSelected);
  console.log(currentWord);

  document.getElementById("word_progress").innerHTML = currentWord;
  count++;
}

//function that takes keyboard input from player and displays under letters guessed

//document.getElementById("word_progress").innerHTML = currentWord;

document.addEventListener("keyup", playerGuesses);

function playerGuesses(event) {
  playerGuess = event.key;
  GuessedLetters = document.createElement("span");
  GuessedLetters.innerHTML = playerGuess;
  document.getElementById("current_letter").innerHTML = playerGuess;
  document.getElementById("guess_display").appendChild(GuessedLetters);

  for (let char = 0; char < wordSelected.length; char++) {
    if (wordSelected[char] === playerGuess) {
      currentWord[char] = playerGuess;
      letter_counter++;
    }

    //console.log(currentWord);
    document.getElementById("word_progress").innerHTML = currentWord;
  }

  if (currentWord.includes("_ ")) {
    console.log("keep playing");
    let diff = currentWord.length - letter_counter;
    document.getElementById("missing").innerHTML = diff;
  } else {
    score++;
    letter_counter = 0;
    document.getElementById("missing").innerHTML = "";
    document.getElementById("score").innerHTML = score;
    currentWord = [];
    console.log(currentWord);
    document.getElementById("word_progress").innerHTML = currentWord;
    GuessedLetters = "";
    document.getElementById("guess_display").innerHTML = GuessedLetters;
  }
}
