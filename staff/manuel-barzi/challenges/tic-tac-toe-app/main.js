var symbol = 'x'

var buttons = document.querySelectorAll('button')

buttons[0].onclick = function() {
    play(symbol, 0, 0)

    if (symbol === 'x') symbol = 'o'
    else symbol = 'x'
}

buttons[1].onclick = function() {
    play(symbol, 0, 1)

    if (symbol === 'x') symbol = 'o'
    else symbol = 'x'
}