
var state = '';
var aux = '';
var operation;

var buttons = document.querySelectorAll('button');
var display = document.querySelector('.display1');


/*Numbers*/
var button7 = buttons[0]
button7.onclick = function() {
    state = state + 7;

    display.innerText = state;
};

var button8 = buttons[1];
button8.onclick = function() {
    state = state + 8;

    display.innerText = state;
};

var button9 = buttons[2];
button9.onclick = function() {
    state = state + 9;

    display.innerText = state;
};

var button4 = buttons[4];
button4.onclick = function() {
    state = state + 4;

    display.innerText = state;
};

var button5 = buttons[5];
button5.onclick = function() {
state = state + 5;


display.innerText = state;
};

var button6 = buttons[6];
button6.onclick = function() {
state = state + 6;


display.innerText = state;
};

var button1 = buttons[8];
button1.onclick = function() {
    state = state + 1;

display.innerText = state;
};

var button2 = buttons[9];
button2.onclick = function() {
    state = state + 2;

    display.innerText = state;
};

var button3 = buttons[10];
button3.onclick = function() {
state = state + 3;

display.innerText = state;
};

var button0 = buttons[13];
button0.onclick = function() {
state = state + 0;

display.innerText = state;
};
/*end numbers */


/*Operators*/ 
buttons[3].onclick = function() {
    aux = state;
    operation = '/';
    state = '';
};

buttons[7].onclick = function() {
    aux = state;
    operation = '*';
    state = '';
};

buttons[11].onclick = function() {
    aux = state;
    operation = '-';
    state = '';
};

buttons[15].onclick = function() {
    aux = state;
    operation = '+';
    state = '';
    };

buttons[16].onclick = function() {
    var result = calculate(Number(aux), operation, Number(state));
    state = result;

    display.innerText = state;
};

var buttonC = buttons[12];
buttonC.onclick = function() {
    state = '';
    aux = '';
    result = '0';

    display.innerText = state + 0;
};