// THIS PART ABOVE INDICATES AND KEEP THE INFORMATION OF THE ROUND, AND SHOW THIS INFO ON THE PANEL

var state = []
var symbol = 'x'

var display = document.querySelector('.display')

function checkStatus() {
    if (state[0] === 'x' && state[1] === 'x' && state[2] === 'x' //rows
        || state[3] === 'x' && state[4] === 'x' && state[5] === 'x'
        || state[6] === 'x' && state[7] === 'x' && state[8] === 'x'
        || state[0] === 'x' && state[4] === 'x' && state[8] === 'x' //diagonals
        || state[2] === 'x' && state[4] === 'x' && state[6] === 'x'
        || state[0] === 'x' && state[3] === 'x' && state[6] === 'x' //columns
        || state[1] === 'x' && state[4] === 'x' && state[7] === 'x'
        || state[2] === 'x' && state[5] === 'x' && state[8] === 'x') {
        display.innerText = 'GANA X'
    }
    else if (state[0] === 'o' && state[1] === 'o' && state[2] === 'o' //rows
        || state[3] === 'o' && state[4] === 'o' && state[5] === 'o'
        || state[6] === 'o' && state[7] === 'o' && state[8] === 'o'
        || state[0] === 'o' && state[4] === 'o' && state[8] === 'o' //diagonals
        || state[2] === 'o' && state[4] === 'o' && state[6] === 'o'
        || state[0] === 'o' && state[3] === 'o' && state[6] === 'o' //columns
        || state[1] === 'o' && state[4] === 'o' && state[7] === 'o'
        || state[2] === 'o' && state[5] === 'o' && state[8] === 'o') {
        display.innerText = 'GANA 0'
    }
    else {
        draw()
    }

}

// DRAW

function draw() {
    var count = 0

    for (var i = 0; i < state.length; i++) {
        if (state[i] !== undefined) {
            count++
        }
    }

    if (count > 7) {
        display.innerHTML = "EMPATE!";
    }
}

var buttons = document.querySelectorAll('button')

var button0 = buttons[0]

button0.onclick = function () {
    state[0] = symbol

    button0.innerText = symbol

    if (symbol === 'x')
        symbol = 'o'
    else
        symbol = 'x'
    checkStatus()
}

var button1 = buttons[1]

button1.onclick = function () {
    state[1] = symbol

    button1.innerText = symbol

    if (symbol === 'x')
        symbol = 'o'
    else
        symbol = 'x'
    checkStatus()
}
var button2 = buttons[2]

button2.onclick = function () {
    state[2] = symbol

    button2.innerText = symbol

    if (symbol === 'x')
        symbol = 'o'
    else
        symbol = 'x'
    checkStatus()
}
var button3 = buttons[3]

button3.onclick = function () {
    state[3] = symbol

    button3.innerText = symbol

    if (symbol === 'x')
        symbol = 'o'
    else
        symbol = 'x'
    checkStatus()
}
var button4 = buttons[4]

button4.onclick = function () {
    state[4] = symbol

    button4.innerText = symbol

    if (symbol === 'x')
        symbol = 'o'
    else
        symbol = 'x'
    checkStatus()
}
var button5 = buttons[5]

button5.onclick = function () {
    state[5] = symbol

    button5.innerText = symbol

    if (symbol === 'x')
        symbol = 'o'
    else
        symbol = 'x'
    checkStatus()
}
var button6 = buttons[6]

button6.onclick = function () {
    state[6] = symbol

    button6.innerText = symbol

    if (symbol === 'x')
        symbol = 'o'
    else
        symbol = 'x'
    checkStatus()
}
var button7 = buttons[7]

button7.onclick = function () {
    state[7] = symbol

    button7.innerText = symbol

    if (symbol === 'x')
        symbol = 'o'
    else
        symbol = 'x'
    checkStatus()
}

var button8 = buttons[8]

button8.onclick = function () {
    state[8] = symbol

    button8.innerText = symbol

    if (symbol === 'x')
        symbol = 'o'
    else
        symbol = 'x'
    checkStatus()
}

var start = document.querySelector('.start')

start.onclick = function () {
    for (var i = 0; i < buttons.length - 1; i++) {
        buttons[i].innerText = ''
    }

    state.length = 0

    display.innerText = ''
}