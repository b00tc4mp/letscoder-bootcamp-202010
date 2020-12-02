document.write('<span></span><br><button>1</button><button>2</button><button>3</button><button>+</button><button>-</button><button>=</button>')

var buttons = document.querySelectorAll('button')
var display = document.querySelector('span')

var current = ''
var aux
var operation

buttons[0].onclick = function() {
    current = current + '1'

    display.innerText = current
}

buttons[1].onclick = function() {
    current = current + '2'

    display.innerText = current
}

buttons[2].onclick = function() {
    current = current + '3'

    display.innerText = current
}

buttons[3].onclick = function() {
    aux = current
    operation = '+'

    current = ''
}

buttons[4].onclick = function() {
    aux = current
    operation = '-'

    current = ''
}

buttons[5].onclick = function() {
    current = calculate(Number(aux), operation, Number(current))

    display.innerText = current
}


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