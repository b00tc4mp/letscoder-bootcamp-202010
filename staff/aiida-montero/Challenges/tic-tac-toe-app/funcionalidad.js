let symbol= 'x'

var buttons = document.querySelectorAll('button');
var result = document.querySelector('span');


buttons[0].onclick = function () {
    buttons[0].innerText = symbol
    play(symbol, 0, 0)
    if (symbol=== 'x') symbol = 'o'
    else symbol = 'x'
    getIfWins()
}

buttons[1].onclick = function () {
    buttons[1].innerText = symbol
    play(symbol, 0, 1)
    if (symbol=== 'x') symbol = 'o'
    else symbol = 'x'
    getIfWins()
    
}
buttons[2].onclick = function () {
    buttons[2].innerText = symbol
    play(symbol, 0, 2)
    if (symbol=== 'x') symbol = 'o'
    else symbol = 'x'
    getIfWins()
}

buttons[3].onclick = function () {
    buttons[3].innerText = symbol
    play(symbol, 1, 0)
    if (symbol=== 'x') symbol = 'o'
    else symbol = 'x'
    getIfWins()
}

buttons[4].onclick = function () {
    buttons[4].innerText = symbol
    play(symbol, 1, 1)
    if (symbol=== 'x') symbol = 'o'
    else symbol = 'x'
    getIfWins()
}
buttons[5].onclick = function () {
    buttons[5].innerText = symbol
    play(symbol, 1, 2)
    if (symbol=== 'x') symbol = 'o'
    else symbol = 'x'
    getIfWins()
}

buttons[6].onclick = function () {
    buttons[6].innerText = symbol
    play(symbol, 2, 0)
    if (symbol=== 'x') symbol = 'o'
    else symbol = 'x'
    getIfWins()

}

buttons[7].onclick = function () {
    buttons[7].innerText = symbol
    play(symbol, 2, 1)
    if (symbol=== 'x') symbol = 'o'
    else symbol = 'x'
    getIfWins()
}


buttons[8].onclick = function () {
    buttons[8].innerText = symbol
    play(symbol, 2, 2)
    if (symbol=== 'x') symbol = 'o'
    else symbol = 'x'
    getIfWins()
}
