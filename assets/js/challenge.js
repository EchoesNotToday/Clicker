var score = 0;
var button = document.getElementById("button");
var display = document.getElementById("score-display");
var multiplier = 1;
var multiply = document.getElementById("multiply");
var multiplyCost = 50;

function clickInc() {
    score = score + multiplier;
    display.innerHTML = score;
}

function augmenterMultiplicateur() {
       if (score >= multiplyCost) {

        multiplier = multiplier + 1;
        score = score - multiplyCost;
        multiplyCost = multiplyCost * 2;
        document.getElementById("multiply-counter").innerHTML = "Große Bonus meine strudel ! Multiplizieren x" + multiplier;
       }
}