/**
 * Calculates the result of an operation over two given numbers.
 *
 * @example
 *      calculate(1, '+', 2)
 *      3
 *
 * @param {number} operand1 The first number of the operation.
 * @param {string} operation The operation to execute (addition '+', subtraction '-', multiplication 'x', division '/').
 * @param {number} operand2 The second number of the operation.
 * 
 * @returns {number} The result of the operation, once applied with the two numbers.
 */

// First we check that the operation entered exists
function checkOperation(operation) {
    return operation === '+' || operation === '-' || operation === '*' || operation === '/'
}

function calculate(number1, operation, number2) {
    // We check the operation
    if (!checkOperation(operation)) return "La operación insertada " + operation + " no existe: +, -, *, /"

    // We check that the second parameter is defined
    if (number2 === undefined) number2 = 0;

    result = number1 + operation + number2;
    return eval(result);
}
