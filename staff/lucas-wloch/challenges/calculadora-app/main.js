const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operator]');
const equalsButton = document.querySelector('[data-equals]');
const clearButton = document.querySelector('[data-limpiar]');
const textAnterior = document.querySelector('[data-text-anterior]');
const textActual = document.querySelector('[data-text-actual]');
const backButton = document.querySelector("[data-back]");


calculator = new calculator(textAnterior,textActual);

numberButtons.forEach( button => {
    button.addEventListener("click", () => {
        calculator.agregarNumero(button.innerText);
        calculator.updateDisplay();
    });
});
operationButtons.forEach( button => {
    button.addEventListener("click", () => {
        calculator.chooseOperation(button.innerText);
        calculator.updateDisplay();
    });
});
equalsButton.addEventListener( "click", button => {
        calculator.compute();
        calculator.updateDisplay();
        calculator.reset();
 });
 clearButton.addEventListener( "click", button => {
    calculator.clear();
    calculator.updateDisplay();  
});
backButton.addEventListener("click", button => {
    calculator.delete();
    calculator.updateDisplay();
});