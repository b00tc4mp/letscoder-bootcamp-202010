var script = document.createElement('script')
script.src = 'https://code.jquery.com/jquery-3.5.1.min.js'

document.head.append(script)


setTimeout(function() {
    
    createButton('click me', function() {
        console.log('hola mundo')
    })
    
}, 1000)


function createButton(title, callback) {
    var button = $('<button>' + title + '</button>')

    $('body').append(button)

    button.click(callback)
}