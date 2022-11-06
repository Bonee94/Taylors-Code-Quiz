//Global Variables
var questionsScreen = document.getElementById('questions-screen');
var startingScreen = document.getElementById('starting-screen');
var startingButton = document.getElementById('start-button')
var allStart = 0;

questionsScreen.style.display = "none";

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

var answersMapped = problemsArray.map(obj => obj.answer)
var optionsMapped = problemsArray.map(obj => obj.options)
var questionMapped = problemsArray.map(obj => obj.question)

console.log("Q:", questionMapped[3])
console.log("A:", answersMapped[3])
console.log("Options:", optionsMapped[3])

function startGame() {

    startingScreen.style.display = "none";
    questionsScreen.style.display = "flex";

    writeQuestion()
    writeOptions();

}
startingButton.addEventListener("click", startGame);

function nextQuestion() {
    startingScreen.style.display = "none";
    questionsScreen.style.display = "flex";

    writeQuestion()
    changeOptions()
}

function writeQuestion() {
    var questionHeader = document.getElementById('questions')
    var currentQuestion = questionMapped[allStart]
    questionHeader.textContent = currentQuestion
    return
}


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

function changeOptions() {
    var arrayToUse = optionsMapped[allStart];

    for (let i = 0; i < arrayToUse.length; i++) {
        var buttonOptions = document.getElementById('this-is-button-' + [i + 1])
        buttonOptions.textContent = arrayToUse[i];
    }
}

function answerSelection(answerSelect) {
    var answerSelect = "";
    var answer1 = document.getElementById("this-is-button-1");
    var answer2 = document.getElementById('this-is-button-2');
    var answer3 = document.getElementById('this-is-button-3');
    var answer4 = document.getElementById('this-is-button-4');
    console.log(answer1)
    answer1.addEventListener("click", answerChosen1);
    answer2.addEventListener('click', answerChosen2);
    answer3.addEventListener('click', answerChosen3);
    answer4.addEventListener('click', answerChosen4);

    return answerSelect
}

function answerChosen1() {
    answerSelect = optionsMapped[allStart][0]
    console.log('1 got clicked')

    answerCheck()
    return answerSelect
}

function answerChosen2() {
    answerSelect = optionsMapped[allStart][1]
    optionsMapped[allStart][1]

    answerCheck()
    return answerSelect
}

function answerChosen3() {
    answerSelect = optionsMapped[allStart][2]
    optionsMapped[allStart][2]

    answerCheck()
    return answerSelect
}

function answerChosen4() {
    answerSelect = optionsMapped[allStart][3]
    optionsMapped[allStart][3]

    answerCheck()
    return answerSelect
}

function answerCheck() {
    var currentAnswer = answersMapped[allStart]
    console.log(answerSelect)
    if (currentAnswer == answerSelect) {
        console.log("it worked")
        allStart = allStart + 1;
        console.log(allStart);
        nextQuestion()
    } else {
        //Put in function to start next question and delete 10 seconds off time
        alert("Wrong Answer")
    }

}