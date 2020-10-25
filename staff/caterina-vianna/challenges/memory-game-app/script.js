var buttons = document.querySelectorAll("p");
var nothing = "";
console.log(buttons);

buttons[0].onclick = function () {
  buttons[0].innerHTML = "🙈";
  sameEyes();
};
buttons[1].onclick = function () {
  buttons[1].innerHTML = "🙉";
  sameEar();
};
buttons[2].onclick = function () {
  buttons[2].innerHTML = "🙊";
  sameMouth();
};
buttons[4].onclick = function () {
  buttons[4].innerHTML = "🙈";
  sameEyes();
};
buttons[3].onclick = function () {
  buttons[3].innerHTML = "🙉";
  sameEar();
};
buttons[5].onclick = function () {
  buttons[5].innerHTML = "🙊";
  sameMouth();
};

function sameEyes() {
  if (buttons[0].innerText === "🙈" && buttons[4].innerText === "🙈") {
    alert("Match!");
    reStartGame();
  }
}

function sameEar() {
  if (buttons[1].innerText === "🙉" && buttons[3].innerText === "🙉") {
    alert("Match!");
  }
}

function sameMouth() {
  if (buttons[2].innerText === "🙊" && buttons[5].innerText === "🙊") {
    alert("Match!");
  }
}

function reStartGame() {
  for (let i = 0; i > buttons.length; i++) {
    buttons[i].innerText = "🧠";
  }
}
