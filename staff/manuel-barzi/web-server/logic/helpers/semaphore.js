const callbacks = []
let blocked = false

// TODO refactor and make it work!

module.exports = callback => {
    callbacks.push(callback)

    if (!blocked) {
        blocked = true

        const done = () => {
            const nextIndex = callbacks.indexOf(callback) + 1

            if (nextIndex < callbacks.length) 
                callback = callbacks[nextIndex]
            else blocked = false

            callback(done)
        }

        callback(done)
    }
}