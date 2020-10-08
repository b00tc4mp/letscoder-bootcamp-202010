
// Esperamos a tener el DOM disponible para manipularlo
document.addEventListener('DOMContentLoaded', function () {
    
    // Seleccionamos el wrapper de la calculadora
    let calculadora = document.querySelector('.calculator');

    // Seleccionamos el display
    let display = document.querySelector('.calculator-display');

    let operand1 = '';
    let operand2 = '';
    let operation = '';
    let lcd = '0';
    let result = 0;
    
    // Función para añadir los numeros en el operando1 o operando2
    function addOperand(num) {
       
        // Lógica para ver donde añadimos el numero, la coma, o el - (operando1 - operando2)
        if (operation === '') {
            
            // Evitamos que se pueda introducir mas de una coma
            if (num === '.' && operand1.indexOf('.') > -1) { 
                num = ''
            }
            
            // En este caso al estar la operación vacia sabemos que vamos añadiendo en el operando 1
            operand1 = operand1 + num
            lcd = operand1
       
        } else {

                //Evitamos que se pueda introducir mas de una coma
                if (num === '.' && operand2.indexOf('.') > -1) { 
                    num = ''
                }

                operand2 = operand2 + num
                lcd = operand2
            
        }
    }
    
    // Atachamos un unico evento (event delegation) 
    calculadora.addEventListener('click', function(e) {

        if (e.target.classList.contains('nine')) {
            addOperand('9');
        }
        if (e.target.classList.contains('eight')) {
            addOperand('8');
        }
        if (e.target.classList.contains('seven')) {
            addOperand('7');
        }
        if (e.target.classList.contains('six')) {
            addOperand('6');
        }
        if (e.target.classList.contains('five')) {
            addOperand('5');
        }
        if (e.target.classList.contains('for')) {
            addOperand('4');
        }
        if (e.target.classList.contains('three')) {
            addOperand('3');
        }
        if (e.target.classList.contains('two')) {
            addOperand('2');
        }
        if (e.target.classList.contains('one')) {
            addOperand('1');
        }
        if (e.target.classList.contains('zero')) {
            addOperand('0');
        }
        if (e.target.classList.contains('clear')) {
            operand1 = '';
            operand2 = '';
            operation = '';
            result = 0;
            lcd = 0;
        }
        if (e.target.classList.contains('division')) {
            operation = '/';
        }
        if (e.target.classList.contains('multiplication')) {
            operation = '*';
        }
        if (e.target.classList.contains('subtraction')) {
            // Comprobamos si podemos añadir el signo negativo
            if ((operand1 === '') || (operation !== '' && operand2 === '' )) {
                addOperand('-');
            } else {
                operation = '-';
            }
        }
        if (e.target.classList.contains('sum')) {
            operation = '+';
        }
        if (e.target.classList.contains('point')) {
            addOperand('.');
        }
        if (e.target.classList.contains('total')) {
            result = calculate(operand1, operation, operand2);
            lcd=result;
            operand1 = result.toString();
            operand2 = '';
            operation = '';
        }
        // Mostrar contenido en pantalla
        display.innerHTML=lcd;
    });
});