const wordsArray = [
  //stores words that will come up in game
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
];
var currentWord = []; //stores status of current word being guessed by player
var wordSelected; //word selected from array of words at random
var playerGuess; //character selected by player
let GuessedLetters; // variable that stores letters that have been guessed by player
var score = 0; //integer variable that keeps track of score
let randomIndex = 0; //random index to pick word from array
let maxGuesses = 10; //maximum number of guesses player has
let binary = 0; // varible that stores whether player guessed a correct letter (1) or not (0)
//console logs are included for testing
//function that inputs word and generates array of underscores based on length of word
function empty_word(word) {
  for (let x = 0; x < word.length; x++) {
    currentWord.push("_ ");
  }
  return currentWord;
}
//Game starts when player presses the start button
document.getElementById("startButton").addEventListener("click", startGame);
function startGame() {
  randomIndex = Math.floor(Math.random() * (wordsArray.length + 1)); //generate random index
  //console.log(randomIndex);
  wordSelected = wordsArray[randomIndex]; //stores word selected from array
  empty_word(wordSelected); //calls empty function and generated array with underscores
  console.log(wordSelected);

  document.getElementById("word_progress").innerHTML = currentWord; //display status of word being guessed to player
}
//start listening for keys inputted by player
document.addEventListener("keyup", playerGuesses);

function playerGuesses(event) {
  playerGuess = event.key; //assigns key to playerGuess variable
  GuessedLetters = document.createElement("span");
  GuessedLetters.innerHTML = playerGuess; //display letter guessed by player in box of guessed letters
  document.getElementById("current_letter").innerHTML = playerGuess;
  document.getElementById("guess_display").appendChild(GuessedLetters); //append letters guessed by player

  //iterate through individual word to check if player's guess is in word
  for (let char = 0; char < wordSelected.length; char++) {
    if (wordSelected[char] === playerGuess) {
      currentWord[char] = playerGuess; //replace underscore with correct letter at char index
      binary = 1; //if letter has been guessed, binary will have a value of 1
      //console.log(binary);
    }

    //console.log(currentWord);
    document.getElementById("word_progress").innerHTML = currentWord; //display current status of word being guessed
  }

  //check value of binary and if player did not guess correct letter, player will have one less guess left
  if (binary === 0) {
    maxGuesses--;
    console.log(maxGuesses);
  } else {
    //assign a value of 0 to binary since the last value of it was 1
    binary = 0;
  }

  //if construct that will determine if player will keep guessing or if game restarts
  //two conditions are: 1.letters have not been guessed (still underscores) and 2.player still has guesses left
  if (currentWord.includes("_ ") && maxGuesses !== 0) {
    //console.log("keep playing");
    document.getElementById("missing").innerHTML = maxGuesses; //display how many guesses player has left
  } else {
    //a new word will be selected from array
    document.getElementById("word_progress").innerHTML = currentWord;

    maxGuesses = 10; //reset number of guesses left
    playerGuess = "";
    document.getElementById("missing").innerHTML = ""; //reset display of guesses left
    document.getElementById("score").innerHTML = score; //display current score
    currentWord = []; //reset array that stores word being guessed

    //document.getElementById("word_progress").innerHTML = currentWord; //empty out word being guessed
    GuessedLetters = ""; //empty out box of guessed letters
    document.getElementById("guess_display").innerHTML = GuessedLetters;
    document.getElementById("current_letter").innerHTML = playerGuess; //empty out div that displays keys
    //alert("Press the start button to select a different word"); //ask player to reset game
    //update score accordingly: 1. if player guessed correct word score increases 2. if player runs out of guesses, score remains the same
    if (maxGuesses === 0) {
      score = score;
    } else {
      score++;
    }
  }
}
