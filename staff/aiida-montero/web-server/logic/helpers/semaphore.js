const callbacks = []

let doing = false

const done = () => {

    if(callbacks.length) return callbacks.shift()(done)

    doing = false

}

module.exports = callbacks => {

    callbacks.push(callback)

    if(!doing){
        doing = true
        done()
    }
}