function wait(millis) { 
    var before = Date.now(); 

    while (Date.now() - before < millis); 
}

function render(frame) {
    console.log('%c' + frame, 'font-size: 2rem')
}

var steps = 10

for (var i = 0; i <= steps; i++) {
    console.clear()

    render(' '.repeat(i) + '✈' + ' '.repeat(steps - i) + '🏢🏢', 'font-size: 2rem')

    wait(200)
}

console.clear()

render(' '.repeat(steps + 1) + '🎇🏢')

wait(200)

console.clear()

render(' '.repeat(steps + 1) + '🔥🏢')

for (var i = 0; i <= steps; i++) {
    console.clear()

    render(' '.repeat(i) + '✈' + ' '.repeat(steps - i) + '🔥🏢', 'font-size: 2rem')

    wait(200)
}

console.clear()

render(' '.repeat(steps + 1) + '🔥🎇')

wait(200)

console.clear()

render(' '.repeat(steps + 1) + '🔥🔥')


