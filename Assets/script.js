// refernce html
var questionText = document.getElementById("question-text");
var optionsList = document.getElementById("options-list");
var startButton = document.getElementById("start-button");

// create variables

var quizQuestions = [
    {
        question: "How can we write comments in CSS?",
        options: ["//", "*!", "-", "none of the above"],
        answer: "none of the above"
    },
    {
        question: "Which HTML tag is used to declare internal CSS?",
        options: ["<style>", "<linl>", "<script>", "none of the above"],
        answer: "<style>"
    },
    {
        question: "What does CSS stand for?",
        options: ["Cascading Style Sheets", "Computer Style Sheets", "Creative Style Sheets", "Colorful Style Sheets"],
        answer: "Cascading Style Sheets"
    },
    {
        question: "Which property is used to control the spacing between lines of text?",
        options: ["line-height", "text-spacing", "letter-spacing", "line-spacing"],
        answer: "line-height"
    },
    {
        question: "Which property is used to change the text color of an element?",
        options: ["color", "text-color", "font-color", "text-style"],
        answer: "color"
    },
];

// create functoion to start quiz
// create a function to load answer choices
// fuynction to check answer
// function to decrease time 
// save with local storage