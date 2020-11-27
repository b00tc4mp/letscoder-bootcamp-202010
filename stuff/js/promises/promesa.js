class Promesa {
    constructor(callback) {
        const resolve = value => this.__then__ && this.__then__(value)

        const reject = value => this.__catch__ && this.__catch__(value)

        //setTimeout(() => callback(resolve, reject), 0)
        setImmediate(() => callback(resolve, reject))
    }

    then(callback) {
        this.__then__ = callback

        return this
    }

    catch(callback) {
        this.__catch__ = callback

        return this
    }
}


//new Promesa((resolve, reject) => setTimeout(() => resolve(100), 3000))
//new Promesa((resolve, reject) => resolve(100))
new Promesa((resolve, reject) => setTimeout(() => Math.random() < .5? resolve('good ,)') : reject(new Error('sorry, failed :(')), 3000))
//new Promesa((resolve, reject) => reject(100))
    .then(console.log)
    .catch(console.error)