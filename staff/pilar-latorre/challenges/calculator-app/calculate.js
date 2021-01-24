
function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function divide(a, b) {
    return a / b
}

function multiply(a, b) {
    return a * b
}
/**
 * Calculates the result of an operation over two given numbers.
 *
 * @example
 *      calculate(1, '+', 2)
 *      3
 *
 * @param {number} a The first number of the operation.
 * @param {string} operation The operation to execute (addition '+', subtraction '-', multiplication 'x', division '/').
 * @param {number} b The second number of the operation.
 * 
 * @returns {number} The result of the operation, once applied with the two numbers.
 */
function calculate(a, operation, b) {
    if (operation === '+') {
        return add(a, b)
    }
    else if (operation === '-') {
        return subtract(a,b)
    }
    else if (operation === '/') {
        return divide(a,b)
    }
    else if (operation === 'x') {
        return multiply(a,b)
    }
}


