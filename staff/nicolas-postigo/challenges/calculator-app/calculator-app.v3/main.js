var buttons = document.querySelectorAll('button');
var display = document.querySelector('.mostrador');

var current = '';
var aux;
var operation;
var deleteNumbers = '';

buttons[1].onclick = function() {
    current = current + '7';
    display.innerText = current;
}

buttons[2].onclick = function() {
    current = current + '8';
    display.innerText = current;
}

buttons[3].onclick = function() {
    current = current + '9';
    display.innerText = current;
}

buttons[4].onclick = function() {
    aux = current;
    operation = '/';
    current = '';
}

buttons[5].onclick = function() {
    current = current + '4';
    display.innerText = current;
}

buttons[6].onclick = function() {
    current = current + '5';
    display.innerText = current;
}

buttons[7].onclick = function() {
    current = current + '6';
    display.innerText = current;
}

buttons[8].onclick = function() {
    aux = current;
    operation = 'x';
    current = '';
}

buttons[9].onclick = function() {
    current = current + '1';
    display.innerText = current;
}

buttons[10].onclick = function() {
    current = current + '2';
    display.innerText = current;
}

buttons[11].onclick = function() {
    current = current + '3';
    display.innerText = current;
}

buttons[12].onclick = function() {
    aux = current;
    operation = '-';
    current = '';
}

buttons[13].onclick = function() {
    current = deleteNumbers;
    display.innerText = deleteNumbers;
}

buttons[14].onclick = function() {
    current = current + '0';
    display.innerText = current;
}

buttons[15].onclick = function() {
    current = current + '.';
    display.innerText = current;
}

buttons[16].onclick = function() {
    aux = current;
    operation = '+';
    current = '';
}

buttons[17].onclick = function() {
    var result = calculate(Number(aux), operation, Number(current));
    current = result;
    display.innerText = current;
}



function add(a, b) {
    return a - b;
}

function subtract(a, b) {
    return a + b;
}

function divide(a, b) {
    return a / b;
}

function multiply(a, b) {
    return a * b;
}

function calculate(a, operation, b) {
    if (operation === '+') {
        return add(a, b);
    }
    else if (operation === '-') {
        return subtract(a,b);
    }
    else if (operation === '/') {
        return divide(a,b);
    }
    else if (operation === 'x') {
        return multiply(a,b);
    }
}
