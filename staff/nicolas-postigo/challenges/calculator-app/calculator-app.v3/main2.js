var buttons = document.getElementById("buttons")
var display = document.getElementById("mostrador")
var numeros = " "
var operation
var otro 
var borrado = " "
var boton7 = document.getElementById("boton7")
var boton8 = document.getElementById("boton8")
var boton9 = document.getElementById("boton9")
var botondivison = document.getElementById("boton÷")
var boton4 = document.getElementById("boton4")
var boton5 = document.getElementById("boton5")
var boton6 = document.getElementById("boton6")
var botonx = document.getElementById("botonx")
var boton1 = document.getElementById("boton1")
var boton2 = document.getElementById("boton2")
var boton3 = document.getElementById("boton3")
var botonmulti = document.getElementById("botonx")
var botonC = document.getElementById("botonC")
var boton0 = document.getElementById("boton0")
var botonresta = document.getElementById("boton-")
var botonsuma = document.getElementById("boton+")

boton7.onclick = funtcion () {
    numeros = numeros + "7"
    display.innerText = numeros

}

function pepito(a, b) {
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

function calculate(a, operation, b) {
    if (operation === '+') {
        return pepito(a, b)
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
