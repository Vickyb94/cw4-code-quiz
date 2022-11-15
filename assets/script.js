var main = document.querySelector("#main")
var mainHeading = document.querySelector("#main-heading")
var formEl = document.querySelector(".nameForm")
var scorePassed = document.querySelector("#score-passed")
var mainHeaderContent = document.querySelector("#main-header-content")
var mainContent = document.querySelector("#main-content")
var formEl = document.querySelector(".nameForm")
var mainSubContent = document.querySelector("#main-sub-content")
var mainButtonSection = document.querySelector("#main-button-section")

//targeting highscore and storing scores in local storage in console//
var score = localStorage.getItem("score")
var highscore = 0;
var storedHighScore = localStorage.getItem("highscore")

//text content for highscore//
//adding highscore element to main heading//
var highScoresH1 = document.createElement("h1")
  highScoresH1.textContent = 'Game Over!'
  highScoresH1.setAttribute('style', 'margin: auto; width: 50%; text-align: center;');
  mainHeading.appendChild(highScoresH1);

  //created a <p> with text content and appended to main header content//
  var highScoresP = document.createElement("p")
  highScoresP.textContent = 'Enter Initials'
  highScoresP.setAttribute('style', 'margin: auto; width: 50%; text-align: center;');
  mainHeaderContent.appendChild(highScoresP);

  //Insert Form//
  var nameForm = document.createElement('textarea')
  nameForm.className = "nameForm"
  nameForm.setAttribute('style', 'margin: auto; width: 100%; text-align: center;');
  nameForm.setAttribute('placeholder', "Initials Here");
  mainContent.appendChild(nameForm);

  // insert submit button
  var submitButton = document.createElement("button")
    submitButton.className = "submitButton"
    submitButton.textContent = 'Submit'
    submitButton.setAttribute('style', 'margin: auto; width: 15%; text-align: center; border-radius: 30px;');
    submitButton.setAttribute('type', 'submit');
    mainButtonSection.appendChild(submitButton);
    //submitButton.addEventListener("submit", submitHSFunction);

    //timer

