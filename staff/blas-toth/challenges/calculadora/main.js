var memory = '';
var auxiliar;
var operation;

var button7 = document.getElementById("7");

button7.onclick = number7;

function number7() {
        var display = document.querySelector(".display");
        memory += 7;
        display.innerText = memory;
}
var button8 = document.getElementById("8");
button8.onclick = number8;
function number8() {
        var display = document.querySelector(".display");
        memory += 8;
        display.innerText = memory;
}

var button9 = document.getElementById("9");
button9.onclick = number9;
function number9() {
        var display = document.querySelector(".display");
        memory += 9;
        display.innerText = memory;
}

var button6 = document.getElementById("6");
button6.onclick = number6;
function number6() {
        var display = document.querySelector(".display");
        memory += 6;
        display.innerText = memory;
}

var button5 = document.getElementById("5");
button5.onclick = number5;
function number5() {
        var display = document.querySelector(".display");
        memory += 5;
        display.innerText = memory;
}

var button4 = document.getElementById("4");
button4.onclick = number4;
function number4() {
        var display = document.querySelector(".display");
        memory += 4;
        display.innerText = memory;
}

var button3 = document.getElementById("3");
button3.onclick = number3;
function number3() {
        var display = document.querySelector(".display");
        memory += 3;
        display.innerText = memory;
}

var button2 = document.getElementById("2");
button2.onclick = number2;
function number2() {
        var display = document.querySelector(".display");
        memory += 2;
        display.innerText = memory;
}

var button1 = document.getElementById("1");
button1.onclick = number1;
function number1() {
        var display = document.querySelector(".display");
        memory += 1;
        display.innerText = memory;
}

var button0 = document.getElementById("0");
button0.onclick = number0;
function number0() {
        var display = document.querySelector(".display");
        memory += 0;
        display.innerText = memory;
}

var buttonSlash = document.getElementById("slash");
buttonSlash.onclick = numberSlash;
function numberSlash() {
        auxiliar = memory
        memory = '';
        operation = '/'
}

var buttonMulti = document.getElementById("multi");
buttonMulti.onclick = numberMulti;
function numberMulti() {
        var display = document.querySelector(".display");
        display.value += "*";
}

var buttonSubtract = document.getElementById("subtract");
buttonSubtract.onclick = numberSubtract;
function numberSubtract() {
        auxiliar = memory
        memory = '';
        operation = '-';
}

var buttonMas = document.getElementById("mas");
buttonMas.onclick = numberMas;
function numberMas() {
        auxiliar = memory;
        memory = '';
        operation = '+';
}

var buttonClear = document.getElementById("clear");
buttonClear.onclick = numberClear;
function numberClear() {
        var display = document.querySelector(".display");
        memory = "";
        display.innerText = memory;
}

var buttonMulti = document.getElementById("multi");
buttonMulti.onclick = numberMulti;
function numberMulti() {
        auxiliar = memory;
        memory = '';
        operation = '*';

}

var buttonPunto = document.getElementById("punto");
buttonPunto.onclick = numberPunto;
function numberPunto() {
        var display = document.querySelector(".display");
        memory += ".";
        display.innerText = memory;
        if (!display.value.includes(".")){display.innerText = memory;}


}

var buttonEqual = document.getElementById("equal");
buttonEqual.onclick = equalSign;
function equalSign() {
        var display = document.querySelector(".display");
        var result

        // TODO call calculate function

        if (operation === '+') {
                result = Number(auxiliar) + Number(memory);
        }else if (operation === '-') {
                result = Number(auxiliar) - Number(memory);
        }else if (operation === '/') {
                result = Number(auxiliar) / Number(memory);
        }else if (operation === '*'){
                result = Number(auxiliar) * Number(memory);
        }
        display.innerText = result;
}