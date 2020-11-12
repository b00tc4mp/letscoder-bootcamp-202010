const callbacks = []
let doing = false
let index = 0

const done = () => {
    index++

    if (index < callbacks.length) 
        callbacks[index](done)
    else {
        callbacks.length = index = 0
        
        doing = false
    }
}

module.exports = callback => {
    callbacks.push(callback)

    if (!doing) {
        doing = true

        callback(done)
    }
}