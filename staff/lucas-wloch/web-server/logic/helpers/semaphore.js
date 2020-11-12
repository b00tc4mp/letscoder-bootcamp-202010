const callbacks = []
let doing = false

const done = () => {
    // if (callbacks.length) return callbacks.shift()(done)
    if (callbacks.length) {
        const hola = callbacks.shift()
        hola(done)
    }else{
        doing = false
    }   

}

module.exports = callback => {
    callbacks.push(callback)

    if (!doing) {
        doing = true

        done()
    }
} 

// callbacks = [ 0: registerUser(pepito2@gmail),
//  1: registerUser(pepito3@gmail) , 2: registerUser(pepito2@gmail) ]
// doing = true

//  callbacks = [  0: registerUser(pepito3) , 1: registerUser(pepito2)]
//  callbacks = [  0:  registerUser(pepito2)]
//  callbacks = [ ]


//  callbacks = [  0:  registerUser(albertito)]
