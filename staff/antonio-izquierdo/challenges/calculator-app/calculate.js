
/*Declaramos las variables. Usamos "resetValue" para resetear la calculadora (<button> "C" </button>). 
Recoge el dato para transformarlo en una string vacía [''], así que su valor desaparece*/
var current = '';
var aux = '';
var resetValue = '';

//SELECCIONAMOS TODOS LOS BOTONES. DESPUÉS SELECCIONAMOS EL DISPLAY.
var buttons = document.querySelectorAll('button');
var display = document.querySelector('span');

//"aux" recoge el valor y lo añade a "current", después vaciamos el display con una empty string [''];
aux = current;
current = '';

//BOTONERA DEL 0 AL 9
buttons [13].onclick = function () { 
    current = current + '0';
    display.innerText = current;
}

buttons [8].onclick = function () { 
    current = current + '1';
    display.innerText = current;
}

buttons [9].onclick = function () { 
    current = current + '2';
    display.innerText = current;
}

buttons [10].onclick = function () { 
    current = current + '3';
    display.innerText = current;
}

buttons [4].onclick = function () { 
    current = current + '4';
    display.innerText = current;
}

buttons [5].onclick = function () { 
    current = current + '5';
    display.innerText = current;
}

buttons [6].onclick = function () { 
    current = current + '6';
    display.innerText = current;
}

buttons [0].onclick = function () { 
    current = current + '7';
    display.innerText = current;
}

buttons [1].onclick = function () { 
    current = current + '8';
    display.innerText = current;
}

buttons [2].onclick = function () { 
    current = current + '9';
    display.innerText = current;
}


//BOTONERA OPERACIONES MATEMÁTICAS ( /, X , -, +)
buttons [3].onclick = function () { 
    aux = current;
    operator = '/';
    current = '';
}

buttons [7].onclick = function () { 
    aux = current;
    operator = '*';
    current = '';
}

buttons [11].onclick = function () { 
    aux = current;
    operator = '-';
    current = '';
}

buttons [15].onclick = function () { 
    aux = current
    operator = '+';
    current = '';
}


//BOTÓN (.) NOTACIÓN PARA NÚMEROS DECIMALES
buttons [14].onclick = function () { 
    current = current + '.';
    display.innerText = current;
}

//BOTÓN (C) RESETEAR CALCULADORA
buttons [12].onclick = function() {
    current = resetValue;
    display.innerText = resetValue;
}

//BOTÓN IGUAL + FUNCIÓN CALCULATE
buttons [16].onclick = function () { 
    var result = calculate(Number(aux), operator, Number(current))
    current = result;
    display.innerText = result;
}

    function calculate(a, operator, b) {
        if (operator === '+')
            return a + b;
        else if (operator === '-')
            return a - b;
        else if (operator === '*')
            return a * b;
        else (operator === '/')
        return a / b;
    }