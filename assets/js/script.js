var questionsScreen = document.getElementById('questions-screen');
var startingScreen = document.getElementById('starting-screen');


questionsScreen.style.display = "none";
//startingScreen.style.display = "none";
//questionsCard.style.display = "flex";

const questionsArray = [
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

console.log(questionsArray)
