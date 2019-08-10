//var count = 0;
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
let randomIndex = 0;
let maxGuesses = 10;
let wrongGuesses = 0;
let binary = 0;

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
  randomIndex = Math.floor(Math.random() * (wordsArray.length + 1));
  console.log(randomIndex);
  wordSelected = wordsArray[randomIndex]; //stores word selected from array
  empty_word(wordSelected);
  console.log(wordSelected);

  document.getElementById("word_progress").innerHTML = currentWord;
  //count++;
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
      //letter_counter++;
      binary = 1;
      console.log(binary);
    }

    // if (currentWord.includes(playerGuess)) {
    //   binary = 1;
    //   console.log(playerGuess);
    // } else {
    //   binary = 0;
    // }

    //console.log(currentWord);
    document.getElementById("word_progress").innerHTML = currentWord;
  }

  if (binary === 0) {
    maxGuesses--;
    console.log(maxGuesses);
  }

  if (currentWord.includes("_ ") && maxGuesses !== 0) {
    //console.log("keep playing");
    document.getElementById("missing").innerHTML = maxGuesses;

    //if (wrongGuesses === 9) {
    //wrongGuesses = 0;
    //}
  } else {
    //letter_counter = 0;
    maxGuesses = 10;
    playerGuess = "";
    document.getElementById("missing").innerHTML = "";
    document.getElementById("score").innerHTML = score;
    currentWord = [];
    alert("Press the start button to select a different word");
    //console.log(currentWord);
    document.getElementById("word_progress").innerHTML = currentWord;
    GuessedLetters = "";
    document.getElementById("guess_display").innerHTML = GuessedLetters;
    document.getElementById("current_letter").innerHTML = playerGuess;

    if (maxGuesses === 0) {
      score = score;
    } else {
      score++;
    }
  }
}
