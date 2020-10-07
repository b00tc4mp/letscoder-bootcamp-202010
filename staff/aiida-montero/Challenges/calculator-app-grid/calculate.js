
var current = ''
var aux = ''
var resetValue = '';

var buttons = document.querySelectorAll('button');
var display = document.querySelector('span');

aux = current;
current = '';

buttons[0].onclick = function () {
    current = current + '0';
    display.innerText = current;
}

buttons[1].onclick = function () {
    current = current + '1';
    display.innerText = current;
}

buttons[2].onclick = function () {
    current = current + '2';
    display.innerText = current;
}

buttons[3].onclick = function () {
    current = current + '3';
    display.innerText = current;
}

buttons[4].onclick = function () {
    current = current + '4';
    display.innerText = current;
}

buttons[5].onclick = function () {
    current = current + '5';
    display.innerText = current;
}

buttons[6].onclick = function () {
    current = current + '6';
    display.innerText = current;
}

buttons[7].onclick = function () {
    current = current + '7';
    display.innerText = current;
}

buttons[8].onclick = function () {
    current = current + '8';
    display.innerText = current;
}

buttons[9].onclick = function () {
    current = current + '9';
    display.innerText = current;
}

buttons[/].onclick = function () { 
    aux = current;
    operator = '/';
    current = '';
}

buttons[*].onclick = function () {
    aux = current;
    operator = '*';
    current = '';
}

buttons[-].onclick = function () {
    aux = current;
    operator = '-';
    current = '';
}

buttons[+].onclick = function () {
    aux = current;
    operator = '+';
    current = '';
}

buttons[.].onclick = function () {
    current = current + '.';
    display.innerText = current;
}

buttons[C].onclick = function () {
    current = resetValue;
    display.innerText = resetValue;
}

buttons[=].onclick = function () {
    var result = calculate(Number(aux), operator, Number(current))
    current = result;
    display.innerText = result;
}

function calculate(a, operator, b) {
    if (operator === '+')
        return a + b
    else if (operator === '-')
        return a - b
    else if (operator === '*')
        return a * b
    else (operator === '/')
    return a / b
}