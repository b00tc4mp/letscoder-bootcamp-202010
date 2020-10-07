
//Declaración de variable 
//ResetValue = reset calculadora (C)
//Transformación del dato una vez recogido (String vacía '') -> valor conseguimos que desaparezca el valor


var current = '';
var aux = '';
var resetValue = '';

// 1 - Selección de todos los botones 
// 2 - Selección del span (display)

var buttons = document.querySelectorAll('button');
var display = document.querySelector('span');

//"aux" recogerá el valor para añadirlo a "current"
// ahora ya vaciaremos / limpiamos el display con '' (empty string)

aux = current;
current = '';

// Botones del 0 al 9  (orden ascendente) 
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

// Botones - Operaciones matemáticas (división, multiplicación, resta y suma) 


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
    aux = current;
    operator = '+';
    current = '';
}

// Botón . (números decimales)

buttons [14].onclick = function () { 
    current = current + '.';
    display.innerText = current;
}


// Botón C - Reseteo de calculadora

buttons [12].onclick = function() {
    current = resetValue;
    display.innerText = resetValue;
}


// Botón igual + función calculate 
buttons [16].onclick = function () { 
    var result = calculate(Number(aux), operator, Number(current))
    current = result;
    display.innerText = result}

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