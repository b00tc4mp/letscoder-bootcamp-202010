var buttons = document.querySelectorAll("button");
var display = document.querySelector(".display");
var displayTotal = document.querySelector(".displayTotal");
var current = "";
var aux;
var aux2;
var operation;
var deleteNumbers = "";
var addZero = "0";
var addNothing;

console.log(buttons);

buttons[2].onclick = function () {
  current = current + "7";
  display.innerText = current;
};

buttons[3].onclick = function () {
  current = current + "8";
  display.innerText = current;
};

buttons[4].onclick = function () {
  current = current + "9";
  display.innerText = current;
};

buttons[5].onclick = function () {
  aux = current;
  operation = "/";
  current = "";
};

buttons[6].onclick = function () {
  current = current + "4";
  display.innerText = current;
};

buttons[7].onclick = function () {
  current = current + "5";
  display.innerText = current;
};

buttons[8].onclick = function () {
  current = current + "6";
  display.innerText = current;
};

buttons[9].onclick = function () {
  aux = current;
  operation = "x";
  current = "";
};

buttons[10].onclick = function () {
  current = current + "1";
  display.innerText = current;
};

buttons[11].onclick = function () {
  current = current + "2";
  display.innerText = current;
};

buttons[12].onclick = function () {
  current = current + "3";
  display.innerText = current;
};

buttons[13].onclick = function () {
  aux = current;
  operation = "-";
  current = "";
};

buttons[14].onclick = function () {
  current = deleteNumbers;
  display.innerText = deleteNumbers;
  display.innerText = addZero;
  displayTotal.innerText = deleteNumbers;
};

buttons[15].onclick = function () {
  current = current + "0";
  display.innerText = current;
};

buttons[16].onclick = function () {
  current = current + ".";
  display.innerText = current;
};

buttons[17].onclick = function () {
  aux = current;
  operation = "+";
  current = "";
};

buttons[18].onclick = function () {
  var result = calculate(Number(aux), operation, Number(current));
  current = result;
  displayTotal.innerText = result;
};

function calculate(a, operator, b) {
  if (operator === "+") return a + b;
  else if (operator === "-") return a - b;
  else if (operator === "x") return a * b;
  else operator === "/";
  return a / b;
}
