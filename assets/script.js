var main = document.querySelector("#main")
var mainHeading = document.querySelector("#main-heading")
var formEl = document.querySelector(".nameForm")

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