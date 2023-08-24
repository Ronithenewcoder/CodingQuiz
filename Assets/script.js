// refernce html
// create variables
// create functoion to start quiz
// create a function to load answer choices
// fuynction to check answer
// function to decrease time 
// save with local storage
// !!!!Make sure to add ul in html to display saved scores!!!

var questionText = document.getElementById("question-text");
var optionsList = document.getElementById("options-list");
var startButton = document.getElementById("start-button");
var timerElement = document.getElementById("timer");
var timeRemainingElement = document.getElementById("time-remaining");
var highScoresList = document.getElementById("high-scores-list");

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

var currentQuestionIndex = 0;
var score = 0;
var timer;
var timeLimit = 60;

startButton.addEventListener("click", startQuiz);

function startQuiz() {
  
  timer = setInterval(updateTimer, 1000);

  displayQuestion(currentQuestionIndex);
}

function displayQuestion(index) {
  var question = quizQuestions[index];
  questionText.textContent = question.question;

  optionsList.innerHTML = "";
  question.options.forEach(function(option, optionIndex) {
    var optionItem = document.createElement("li");
    optionItem.textContent = option;
    optionItem.addEventListener("click", function() {
      checkAnswer(option, question.answer);
    });
    optionsList.appendChild(optionItem);
  });
}

function checkAnswer(selectedOption, correctAnswer) {
  if (selectedOption === correctAnswer) {
    score++;
  } else {
  
    timeLimit -= 10;
  }

  
  currentQuestionIndex++;
  if (currentQuestionIndex < quizQuestions.length) {
    displayQuestion(currentQuestionIndex);
  } else {
    endQuiz();
  }
}

function updateTimer() {
  timerElement.textContent = "Time: " + timeLimit + "s";

  if (timeLimit <= 0) {
    endQuiz();
  } else {
    timeLimit--;
  }
}

function endQuiz() {
  clearInterval(timer);

  var quizContainer = document.getElementById("quiz-container");
  quizContainer.innerHTML = "<h2>Quiz Over</h2>" +
    "<p>Your score: " + score + "</p>" +
    "<label for='initials'>Enter your initials:</label>" +
    "<input type='text' id='initials'>" +
    "<button id='save-button'>Save Score</button>";

  var saveButton = document.getElementById("save-button");
  saveButton.addEventListener("click", saveScore);
}

function saveScore() {
  var initialsInput = document.getElementById("initials");
  var initials = initialsInput.value;

  if (initials !== "") {
    var highScores = JSON.parse(localStorage.getItem("highScores")) || [];

    var newScore = {
      initials: initials,
      score: score
    };

    highScores.push(newScore);

    localStorage.setItem("highScores", JSON.stringify(highScores));

   
    initialsInput.value = "";
    displayHighScores();
  }
}

function displayHighScores() {
  var highScores = JSON.parse(localStorage.getItem("highScores")) || [];

  highScoresList.innerHTML = "";
  highScores.forEach(function(score) {
    var listItem = document.createElement("li");
    listItem.textContent = score.initials + ": " + score.score;
    highScoresList.appendChild(listItem);
  });
}