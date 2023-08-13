var incSC = 0;
var timer = 60;
var hitvalue = document.getElementById("hit");
var bottm = document.getElementById("bottom");
var ran;

function bubbles() {
  for (var i = 1; i <= 112; i++) {
    ran = Math.floor(Math.random() * 10);
    bottm.innerHTML += `<div class="bbl" id="bbl">${ran}</div>`;
  }
}
bubbles();

function hit() {
  hitvalue.innerHTML = Math.floor(Math.random() * 10);
}
hit();

function timeOut() {
  var timerInt = setInterval(function () {
    if (timer > 0) {
      timer--;
    } else {
      clearInterval(timerInt);
      document.getElementById(
        "bottom"
      ).innerHTML = `<center><h2>Game Over<h2/><br/><h2>Your score is ${incSC}<br/>Refresh to play again..<center/>`;
    }
    document.getElementById("timer").innerHTML = timer;
  }, 1000);
}
timeOut();

function increaseScore() {
  incSC += 10;
  document.getElementById("score").textContent = incSC;
}

document.getElementById("bottom").addEventListener("click", (e) => {
  if (e.target.textContent == hitvalue.textContent) {
    hit();
    increaseScore();
    bottm.innerHTML = "";
    bubbles();
  }
});
