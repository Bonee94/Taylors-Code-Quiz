var questionsScreen = document.getElementById('questions-screen');
var startingScreen = document.getElementById('starting-screen');


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
console.log(problemsArray)

var answersMapped = problemsArray.map(obj => obj.answer)
var optionsMapped = problemsArray.map(obj => obj.options)
console.log(answersMapped[3])
console.log(optionsMapped[4])

function startGame() {

    startingScreen.style.display = "none";
    questionsScreen.style.display = "flex";

    writeOptions();





}
document.addEventListener("click", startGame);



function writeOptions() {
    console.log('Wrote Options')
    var olEl = document.getElementById("selectable-answers");
    var questionSpot = "";

//    Need to be able to change this array number depending on question
    var arrayToUse = optionsMapped[0];
    
    console.log(optionsMapped[0][1])
    console.log(arrayToUse)

        for (let i = 0; i < arrayToUse.length; i++) {
            var liEL = document.createElement('li',);
            liEL.textContent = arrayToUse[i];
            olEl.append(liEL);

            console.log("for loop");
        }
};