const callbacks = []
let doing = false

const done = () => {
    if (callbacks.length) return callbacks.shift()(done)
    
    doing = false
}

module.exports = callback => {
    callbacks.push(callback)

    if (!doing) {
        doing = true

        done()
    }
}