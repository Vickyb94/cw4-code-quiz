var questionList = 0;
var currentTime = document.querySelector("#currentTime");
var timer = document.querySelector("#startQuiz");
var questionsDiv = document.querySelector("#questionsDiv");
var wrapper = document.querySelector("#wrapper");


//array questions and multiple answer choices
var questions = [
  {
    title: "What attribute do we use for data binding?",
    choices: ["datasrc", "mayscript", "name", "datafld"],
    answer: "datasrc",
  },
  {
    title: "Which of the following keywords is used to define a variable in Javascript?",
    choices: ["var", "let", "event", "both var & let"],
    answer: "both var & let",
  },
  {
    title: "Arrays in Javascript can be used to store ____.",
    choices: [
      "numbers and strings",
      "other arrays",
      "booleans",
      "all of the above",
    ],
    answer: "all of the above",
  },
  {
    title:
      "String values must be enclosed within ____ when being assigned to variables.",
    choices: ["commas", "curly brackets", "quotes", "parenthesis"],
    answer: "quotes",
  },
  {
    title:
      "When an operator's value is NULL, the typeof returned by the unary operator is:",
    choices: ["boolean", "integer", "object", "undefined"],
    answer: "object",
  },
];

var score = 0;
var questionList = 0;

//Timer
var secondsLeft = 60;
var holdInterval = 0;
var penalty = 5;
var ulCreate = document.createElement("ul");

timer.addEventListener("click", function () {
  if (holdInterval === 0) {
    holdInterval = setInterval(function () {
      secondsLeft--;
      currentTime.textContent = "Remaining Time: " + secondsLeft;

      if (secondsLeft <= 0) {
        clearInterval(holdInterval);
        allDone();
        currentTime.textContent = "Your time is up!";
      }
    }, 1000);
  }
  render(questionList);
});

//create a function so that the list of questions runs on start
function render(questionList) {
  questionsDiv.innerHTML = "";
  ulCreate.innerHTML = "";
  for (var i = 0; i < questions.length; i++) {
    var userQuestion = questions[questionList].title;
    var userChoices = questions[questionList].choices;
    questionsDiv.textContent = userQuestion;
  }
  userChoices.forEach(function (newItem) {
    var listItem = document.createElement("li");
    listItem.textContent = newItem;
    questionsDiv.appendChild(ulCreate);
    ulCreate.appendChild(listItem);
    listItem.addEventListener("click", compare);
  });
}
//create a function that will compare user answer to the correct answer
function compare(event) {
  var element = event.target;
  if (element.matches("li")) {
    var createDiv = document.createElement("div");
    createDiv.setAttribute("id", "createDiv");
    if (element.textContent == questions[questionList].answer) {
      score++;
      createDiv.textContent = "Correct!";
    } else {
      secondsLeft = secondsLeft - penalty;
      createDiv.textContent = "Wrong!";
    }
  }

  questionList++;

  if (questionList >= questions.length) {
    allDone();
    createDiv.textContent =
      "Finished!" +
      " " +
      "You got  " +
      score +
      "/" +
      questions.length +
      " Correct!";
  } else {
    render(questionList);
  }
  questionsDiv.appendChild(createDiv);
}

//quiz is finished
function allDone() {
  questionsDiv.innerHTML = "";
  currentTime.innerHTML = "";

  var createH1 = document.createElement("h1");
  createH1.setAttribute("id", "createH1");
  createH1.textContent = "Finished!";

  questionsDiv.appendChild(createH1);

  // timer is replaced by user's score
  if (secondsLeft >= 0) {
    var timeRemaining = secondsLeft;
    var createP = document.createElement("p");
    clearInterval(holdInterval);
    createP.textContent = "Your score is: " + timeRemaining;

    questionsDiv.appendChild(createP);
  }
//appending label for user to enter initials
  var createLabel = document.createElement("label");
  createLabel.setAttribute("id", "createLabel");
  createLabel.textContent = "Enter your initials: ";

  questionsDiv.appendChild(createLabel);

  var createInput = document.createElement("input");
  createInput.setAttribute("type", "text");
  createInput.setAttribute("id", "initials");
  createInput.textContent = "";

  questionsDiv.appendChild(createInput);

  //appending the submit button

  var createSubmit = document.createElement("button");
  createSubmit.setAttribute("type", "submit");
  createSubmit.setAttribute("id", "Submit");
  createSubmit.textContent = "Submit";

  questionsDiv.appendChild(createSubmit);

  // function to save final score in local storage and to pull the score from local storage to display in highscore list
  createSubmit.addEventListener("click", function () {
    var initials = createInput.value;

    if (initials === null) {
      alert("Enter a value!");
    } else {
      var finalScore = {
        initials: initials,
        score: timeRemaining,
      };
      console.log(finalScore);
      var allScores = localStorage.getItem("allScores");
      if (allScores === null) {
        allScores = [];
      } else {
        allScores = JSON.parse(allScores);
      }
      allScores.push(finalScore);
      var newScore = JSON.stringify(allScores);
      localStorage.setItem("allScores", newScore);
      window.location.replace("highScore.html");
    }
  });
}