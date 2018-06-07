//Generating Random Number (10 - 100)

var winningNumber = Math.floor(Math.random() * (100)+20);

  $("#target").text(winningNumber);

// Current Score:

var currentScore = 0;

$("#TS").text(currentScore)

// Total Score :

var totalScore = 0;

//Set Win to 0
var wins = 0;

  $("#winss").append(wins);

// Set Losses to Zero
var losses = 0;

  $("#lossess").append(losses);

// Array Of 4 Random Numbers 
var randNumbers = [Math.floor(Math.random() * (10)+10),Math.floor(Math.random() * (10)+10),Math.floor(Math.random() * (10)+10),Math.floor(Math.random() * (10)+10)];

// Images

for (var i = 0; i < randNumbers.length; i++) {

  var imageCrystal = $("<img>");


  imageCrystal.addClass("crystal-image");

  imageCrystal.attr("src",'assets/C3.png');
  
  imageCrystal.attr("data-crystalvalue", randNumbers[i]);

  $("#crystals").append(imageCrystal);
}


$(".crystal-image").on("click", function() {


  var crystalValue = ($(this).attr("data-crystalvalue"));
  crystalValue = parseInt(crystalValue);

  console.log(crystalValue);
  
  totalScore += crystalValue;
  
  // Appending current score to Html

  $("#TS").text(totalScore);

  console.log(totalScore);

  if (totalScore === winningNumber) {
    wins++;
    alert("You win!");
    $("#winss").text(wins);
    var newNumber = Math.floor(Math.random() * (100)+20);
    $("#target").text(newNumber);
    resetScore = 0;
    totalScore = 0;
    $("#TS").text(resetScore);
    

  }

  else if (totalScore >= winningNumber) {
    losses++;
    alert("You lose!!");
    $("#lossess").text(losses);
    var newNumber = Math.floor(Math.random() * (100)+20);
    $("#target").text(newNumber);
    resetScore = 0;
    totalScore = resetScore;
    $("#TS").text(resetScore);
    
    
  }

});