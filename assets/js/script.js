//Global Variables
var questionsScreen = document.getElementById('questions-screen');
var startingScreen = document.getElementById('starting-screen');
var startingButton = document.getElementById('start-button')
var timerId = document.getElementById('time');
var allStart = 0;
var answerSelect = "";


questionsScreen.style.display = "none";
//Array of objects for referencing
const problemsArray = [
    // Question 1    
    {
        answer: "Alerts",
        options: ["Strings", "Booleans", "Alerts", "Numbers"],
        question: "Commonly used data types DO NOT include: ",
    },
    // Question 2
    {
        answer: "Parentheses",
        options: ["Quotes", "Curly Brackets", "Parentheses", "Square Brackets"],
        question: "The condition in an if/else statement is enclosed within _____.",
    },
    // Question 3
    {
        answer: "All of the above",
        options: ["Numbers and Strings", "Other Arrays", "Booleans", "All of the above"],
        question: "Arrays in JavaScript can be used to store _____.",
    },
    // Question 4
    {
        answer: "Quotes",
        options: ["Commas", "Curly Brackets", "Quotes", "Parentheses"],
        question: "String values must be enclosed within _____ when being assigned to variables",
    },
    // Question 5
    {
        answer: "console.log",
        options: ["JavaScript", "Terminal/Bash", "For Loops", "console.log"],
        question: "A very useful tool used during development and debugging for printing content to the debugger is: ",
    },
]
console.log('Problems Array:', problemsArray)

//This logic is selecting the paticular objects within the array to make available
var answersMapped = problemsArray.map(obj => obj.answer)
var optionsMapped = problemsArray.map(obj => obj.options)
var questionMapped = problemsArray.map(obj => obj.question)

console.log("Q:", questionMapped[3])
console.log("A:", answersMapped[3])
console.log("Options:", optionsMapped[3])

//Begins the game
function startGame() {

    startingScreen.style.display = "none";
    questionsScreen.style.display = "flex";

    writeQuestion()
    writeOptions();
    timerSet;
    timerInterval()
}
startingButton.addEventListener("click", startGame);


var setTimer;
var start = 60;
var timerSet = function () {
    start--;

    timerId.innerHTML = "Time: " + start;

    if (start === 0) {
        clearInterval(setTimer);
        timerId.textContent = "No time Remaining"
    };

    return
}

function timerInterval() {
    setTimer = setInterval(timerSet, 1000);
}





// Initializes next question changes
function nextQuestion() {
    startingScreen.style.display = "none";
    questionsScreen.style.display = "flex";

    writeQuestion()
    changeOptions()
}

//Changes question upon start and after each selection
function writeQuestion() {
    var questionHeader = document.getElementById('questions')
    var currentQuestion = questionMapped[allStart]
    questionHeader.textContent = currentQuestion
    return
}

//Intial rendering of options to start
function writeOptions() {
    console.log('Wrote Options')
    var olEl = document.getElementById("selectable-answers");

    //    Need to be able to change this array number depending on question
    var arrayToUse = optionsMapped[allStart];

    console.log(optionsMapped[0][1])
    console.log(arrayToUse)

    for (let i = 0; i < arrayToUse.length; i++) {
        var liEL = document.createElement('li');
        var buttonOptions = document.createElement('button');
        buttonOptions.textContent = arrayToUse[i];
        buttonOptions.setAttribute("id", 'this-is-button-' + [i + 1]);
        liEL.append(buttonOptions);
        olEl.append(liEL);
    }

    answerSelection();

    return
};
// Displays the next set of options
function changeOptions() {
    var arrayToUse = optionsMapped[allStart];

    for (let i = 0; i < arrayToUse.length; i++) {
        var buttonOptions = document.getElementById('this-is-button-' + [i + 1])
        buttonOptions.textContent = arrayToUse[i];
    }
}

//Renders what button can be selected and starts function to push answer to be checked
function answerSelection(answerSelect) {
    var answer1 = document.getElementById("this-is-button-1");
    var answer2 = document.getElementById('this-is-button-2');
    var answer3 = document.getElementById('this-is-button-3');
    var answer4 = document.getElementById('this-is-button-4');
    answer1.addEventListener("click", answerChosen1);
    answer2.addEventListener('click', answerChosen2);
    answer3.addEventListener('click', answerChosen3);
    answer4.addEventListener('click', answerChosen4);

    return answerSelect
}
// If button 1 was pressed; sends to be checked
function answerChosen1() {
    answerSelect = optionsMapped[allStart][0]
    console.log('1 got clicked')

    answerCheck()
    return answerSelect
}

// If button 2 was pressed; sends to be checked
function answerChosen2() {
    answerSelect = optionsMapped[allStart][1]
    optionsMapped[allStart][1]

    answerCheck()
    return answerSelect
}

// If button 3 was pressed; sends to be checked
function answerChosen3() {
    answerSelect = optionsMapped[allStart][2]
    optionsMapped[allStart][2]

    answerCheck()
    return answerSelect
}

// If button 4 was pressed; sends to be checked
function answerChosen4() {
    answerSelect = optionsMapped[allStart][3]
    optionsMapped[allStart][3]

    answerCheck()
    return answerSelect
}


//Checks passsed on answer for wrong or right
function answerCheck() {
    var currentAnswer = answersMapped[allStart]
    console.log(answerSelect)
    if (currentAnswer == answerSelect) {
        console.log("it worked")
        allStart = allStart + 1;
        console.log(allStart);
        console.log(answerSelect);
        nextQuestion()
    } else {
        var liChangedTIme = document.getElementById('selectable-answers')
        //Put in function to start next question and delete 10 seconds off time
        allStart = allStart + 1;
        clearInterval(setTimer);
        liChangedTIme.addEventListener("click", () => {
            start = start - 10;
            setTimer = setInterval(timerSet, 1000);
        })
        nextQuestion();
    }

}