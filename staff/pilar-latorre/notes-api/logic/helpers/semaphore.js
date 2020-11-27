 let chain = Promise.resolve()

 module.exports = callback => chain = chain.then(callback, callback)



/*
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
} */