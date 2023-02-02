//Global Variables
var questionsScreen = document.getElementById("questions-screen");
var startingScreen = document.getElementById("starting-screen");
var highscoresScreen = document.getElementById("highscores-screen");
var startingButton = document.getElementById("start-button");
var answerRightWrong = document.getElementById("right-wrong-display");
var viewHighscores = document.getElementById("highscores");
var timerId = document.getElementById("time");
var allStart = 0;
var answerSelect = "";
var finalScore = 0;
var highScoresArray = [];
var highscoreInput = document.getElementById("highscore-list");
var highscoreOL = document.getElementById("highscore-ul");
var highscoreUlView = document.getElementById("highscore-ul-view");
var highscoreViewHdr = document.getElementById("highscores-view-hdr");
var highscoreViewScreen = document.getElementById("highscores-view-id");
var hsSubmit = document.querySelector("#enter-initials-submission");
var backToGame = document.getElementById("play-game-from-hs");

function init() {
  startingScreen.style.display = "flex";
  questionsScreen.style.display = "none";
  highscoresScreen.style.display = "none";
  highscoreViewScreen.style.display = "none";
}

function changeToHighscore() {
  clearInterval(setTimer);
  // Change Displays
  startingScreen.style.display = "none";
  questionsScreen.style.display = "none";
  highscoresScreen.style.display = "none";
  highscoreViewScreen.style.display = "flex";

  highscoreViewHdr.textContent = "Highscores";

  gettingScoresView();

  backToGame.addEventListener("click", clearGame);
}

viewHighscores.addEventListener("click", changeToHighscore);

questionsScreen.style.display = "none";
//Array of objects for referencing
const problemsArray = [
  // Question 1
  {
    answer: "Alerts",
    options: ["Strings", "Booleans", "Alerts", "Numbers"],
    question: "1. Commonly used data types DO NOT include: ",
  },
  // Question 2
  {
    answer: "Parentheses",
    options: ["Quotes", "Curly Brackets", "Parentheses", "Square Brackets"],
    question:
      "2. The condition in an if/else statement is enclosed within _____.",
  },
  // Question 3
  {
    answer: "All of the above",
    options: [
      "Numbers and Strings",
      "Other Arrays",
      "Booleans",
      "All of the above",
    ],
    question: "3. Arrays in JavaScript can be used to store _____.",
  },
  // Question 4
  {
    answer: "Quotes",
    options: ["Commas", "Curly Brackets", "Quotes", "Parentheses"],
    question:
      "4. String values must be enclosed within _____ when being assigned to variables",
  },
  // Question 5
  {
    answer: "console.log",
    options: ["JavaScript", "Terminal/Bash", "For Loops", "console.log"],
    question:
      "5. A very useful tool used during development and debugging for printing content to the debugger is: ",
  },
];

//This logic is selecting the paticular objects within the array to make available
var answersMapped = problemsArray.map((obj) => obj.answer);
var optionsMapped = problemsArray.map((obj) => obj.options);
var questionMapped = problemsArray.map((obj) => obj.question);

//Clears everything for the game to restart
function clearGame() {
  window.location.reload();
}

//Begins the game
function startGame() {
  startingScreen.style.display = "none";
  questionsScreen.style.display = "flex";
  highscoresScreen.style.display = "none";
  highscoreViewScreen.style.display = "none";

  writeQuestion();
  writeOptions();
  timerId.innerHTML = "Time: " + (start + 1);
  timerSet;
  timerInterval();
}
startingButton.addEventListener("click", startGame);

var setTimer;
var start = 59;
var timerSet = function () {
  timerId.innerHTML = "Time: " + start;

  start--;

  if (start == 0 || start <= -1) {
    clearInterval(setTimer);
    timerId.textContent = "No time Remaining";
    allStart = 10;
    highScores(0);
  }

  return;
};

// Timer function
function timerInterval() {
  setTimer = setInterval(timerSet, 1000);
}

// Initializes next question changes
function nextQuestion() {
  startingScreen.style.display = "none";
  questionsScreen.style.display = "flex";
  highscoreViewScreen.style.display = "none";

  writeQuestion();
  changeOptions();
}

//Changes question upon start and after each selection
function writeQuestion() {
  var questionHeader = document.getElementById("questions");
  var currentQuestion = questionMapped[allStart];
  questionHeader.textContent = currentQuestion;
  return;
}

//Intial rendering of options to start
function writeOptions() {
  var olEl = document.getElementById("selectable-answers");

  // This allStart array number is what synchronizes the array of objects information pulling
  var arrayToUse = optionsMapped[allStart];

  // For loop that write the initial Li elements
  for (let i = 0; i < arrayToUse.length; i++) {
    var liEL = document.createElement("li");
    var buttonOptions = document.createElement("button");
    buttonOptions.textContent = arrayToUse[i];
    buttonOptions.setAttribute("id", "this-is-button-" + [i + 1]);
    liEL.append(buttonOptions);
    olEl.append(liEL);
  }

  answerSelection();

  return;
}
// Displays the next set of options
function changeOptions() {
  var arrayToUse = optionsMapped[allStart];

  for (let i = 0; i < arrayToUse.length; i++) {
    var buttonOptions = document.getElementById("this-is-button-" + [i + 1]);
    buttonOptions.textContent = arrayToUse[i];
  }
}

//Renders what button can be selected and starts function to push answer to be checked
function answerSelection() {
  var answer1 = document.getElementById("this-is-button-1");
  var answer2 = document.getElementById("this-is-button-2");
  var answer3 = document.getElementById("this-is-button-3");
  var answer4 = document.getElementById("this-is-button-4");
  answer1.addEventListener("click", answerChosen1);
  answer2.addEventListener("click", answerChosen2);
  answer3.addEventListener("click", answerChosen3);
  answer4.addEventListener("click", answerChosen4);

  return answerSelect;
}
// If button 1 was pressed; sends to be checked
function answerChosen1() {
  answerSelect = optionsMapped[allStart][0];

  answerCheck(answerSelect);
  return;
}

// If button 2 was pressed; sends to be checked
function answerChosen2() {
  answerSelect = optionsMapped[allStart][1];
  optionsMapped[allStart][1];

  answerCheck(answerSelect);
  return;
}

// If button 3 was pressed; sends to be checked
function answerChosen3() {
  answerSelect = optionsMapped[allStart][2];
  optionsMapped[allStart][2];

  answerCheck(answerSelect);
  return;
}

// If button 4 was pressed; sends to be checked
function answerChosen4() {
  answerSelect = optionsMapped[allStart][3];
  optionsMapped[allStart][3];

  answerCheck(answerSelect);
  return;
}

// This section writes the gray right/wrong display under the options

function rightWrongTimer(name) {
  rWTimer = setTimeout(name, 600);
}

function answerGrayClear() {
  answerRightWrong.innerHTML = null;
}

//Checks passsed on answer for wrong or right and decides to start next question
//or move to highscores
function answerCheck(answerSelect) {
  var currentAnswer = answersMapped[allStart];

  if (currentAnswer == answerSelect) {
    allStart = allStart + 1;
    answerRightWrong.innerHTML = "Correct!";
    rightWrongTimer(answerGrayClear);
    finalScore = finalScore + 22;
    if (allStart <= 4) {
      nextQuestion();
    } else {
      // This is splitting the "Time: (num)" into an array and then
      // I'm calling on the [1]index and parsethe number from the string to
      // create an addable interger and passing that value to highscore() Func
      var timeRemaining = timerId.innerHTML.split(" ");
      var timeRemainingToScore = timeRemaining[1];
      timeRemainingToScore = parseInt(timeRemainingToScore);
      highScores(timeRemainingToScore);
    }
  } else {
    // Actions to start next question and delete 10 seconds off time
    allStart = allStart + 1;
    answerRightWrong.innerHTML = "Wrong";
    rightWrongTimer(answerGrayClear);
    clearInterval(setTimer);
    timerInterval();

    timerId.innerHTML = "Time: " + (start - 9);
    // If last question has less then 10 seconds left it will stop timer on wrong answer
    if (start <= 9) {
      clearInterval(setTimer);
      timerId.textContent = "No time Remaining";
      highScores(0);
    } else {
      start = start - 10;
      if (allStart <= 4) {
        nextQuestion();
      } else {
        // This is splitting the "Time: (num)" into an array and then
        // I'm calling on the [1]index and parsethe number from the string to
        // create an addable interger and passing that value to highscore() Func
        var timeRemaining = timerId.innerHTML.split(" ");
        var timeRemainingToScore = timeRemaining[1];
        timeRemainingToScore = parseInt(timeRemainingToScore);
        highScores(timeRemainingToScore);
      }
    }
  }
}

// This is the highscores card Functions and Variables
var finalScoreLocation = document.getElementById("finalScoreWritten");
var completedScore = 0;

function highScores(timeRemainingToScore) {
  clearInterval(setTimer);
  // Change Displays
  startingScreen.style.display = "none";
  questionsScreen.style.display = "none";
  highscoresScreen.style.display = "flex";
  highscoreViewScreen.style.display = "none";
  // Printing Score
  completedScore = finalScore + timeRemainingToScore;
  finalScoreLocation.textContent = "Your final score is " + completedScore;

  highScoresSubmission();
}

// For initials submission form

//Writes button and checks local storage for previous scores
function highScoresSubmission() {
  var buttonEl = document.createElement("button");
  var startAgain = document.getElementById("start-again");
  var startAgainButton = document.createElement("button");

  startAgainButton.classList.add("play-again-button");
  startAgainButton.textContent = "Play Again";
  startAgain.appendChild(startAgainButton);

  buttonEl.classList.add("initial-submit-button");
  buttonEl.textContent = "Submit";
  hsSubmit.appendChild(buttonEl);
  gettingScores();
  startAgainButton.addEventListener("click", clearGame);
}

// This on submission stores the new score and renders the new list
hsSubmit.addEventListener("submit", function (event) {
  event.preventDefault();
  var currentScore = highscoreInput.value;
  if (currentScore === null || currentScore === "") {
    return;
  } else {
    highScoresArray.push(currentScore + " - Score: " + completedScore);
  }

  highscoreInput.value = "";

  storeHS(highScoresArray);
  gettingScores();
});

// Function to write to local storage
function storeHS() {
  localStorage.setItem("highscores", JSON.stringify(highScoresArray));
}

// Function to render the list game end
function renderHS(highScoresArray) {
  highscoreOL.innerHTML = "";

  for (var i = 0; i < highScoresArray.length; i++) {
    var printScore = highScoresArray[i];
    var liEL = document.createElement("li");

    liEL.setAttribute("data-index", i);

    liEL.innerHTML = printScore;
    highscoreOL.append(liEL);
  }
}

// Function to render the list highscore view
function renderHSView(highScoresArray) {
  highscoreUlView.innerHTML = "";

  for (var i = 0; i < highScoresArray.length; i++) {
    var printScore = highScoresArray[i];
    var liEL = document.createElement("li");

    liEL.setAttribute("data-index", i);

    liEL.innerHTML = printScore;
    highscoreUlView.append(liEL);
  }
}

// Function that get stored scores and send them to be rendered to the page
function gettingScores() {
  var storedArray = JSON.parse(localStorage.getItem("highscores"));

  if (storedArray !== null) {
    highScoresArray = storedArray;
  }

  renderHS(highScoresArray);
}

// Function that get stored scores and send them to be rendered to the page for highscore view
function gettingScoresView() {
  var storedArray = JSON.parse(localStorage.getItem("highscores"));

  if (storedArray !== null) {
    highScoresArray = storedArray;
  }

  renderHSView(highScoresArray);
}

init();
