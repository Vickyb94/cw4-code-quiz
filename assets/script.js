var main = document.querySelector("#main")
var mainHeading = document.querySelector("#main-heading")
var formEl = document.querySelector(".nameForm")
var scorePassed = document.querySelector("#score-passed")
var mainHeaderContent = document.querySelector("#main-header-content")

//targeting highscore and storing scores in local storage in console//
var score = localStorage.getItem("score")
var highscore = 0;
var storedHighScore = localStorage.getItem("highscore")

//text content for highscore//
//adding highscore element to main heading//
var highScoresH1 = document.createElement("h1")
  highScoresH1.textContent = 'High Scores Chart!'
  highScoresH1.setAttribute('style', 'margin: auto; width: 50%; text-align: center;');
  mainHeading.appendChild(highScoresH1);

  //created a <p> with text content and appended to main header content//
  var highScoresP = document.createElement("p")
  highScoresP.textContent = 'Enter your name to save new high score!'
  highScoresP.setAttribute('style', 'margin: auto; width: 50%; text-align: center;');
  mainHeaderContent.appendChild(highScoresP);
