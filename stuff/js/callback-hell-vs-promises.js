function salute(salutation, callback) {
    setTimeout(() => {
        Math.random() < 0.8? callback(new Error(`ERROR ${salutation}`)) : callback(null, `HELLO ${salutation}`)
    }, (Math.random() + 1) * 1000)
}


salute('hola', (error, result) => {
    if (error) {
        console.error(error)

        return salute('hello', (error, result) => {
            if (error) {
                console.error(error)
                
                return salute('ciao', (error, result) => {
                    if (error) {
                        console.error(error)
                        
                        return salute('oi', (error, result) => {
                            if (error) {
                                console.error(error)

                                return salute('hallo', (error, result) => {
                                    if (error) {
                                        return console.error(error)
                                    }

                                    console.log(result)
                                })
                            }

                            console.log(result)
                        })
                    }
                    
                    console.log(result)
                })
            }

            console.log(result)
        })
    }

    console.log(result)
})

undefined
VM1935:10 Error: ERROR hola
    at <anonymous>:3:39
(anonymous) @ VM1935:10
(anonymous) @ VM1935:3
setTimeout (async)
salute @ VM1935:2
(anonymous) @ VM1935:8
VM1935:14 Error: ERROR hello
    at <anonymous>:3:39
(anonymous) @ VM1935:14
(anonymous) @ VM1935:3
setTimeout (async)
salute @ VM1935:2
(anonymous) @ VM1935:12
(anonymous) @ VM1935:3
setTimeout (async)
salute @ VM1935:2
(anonymous) @ VM1935:8
VM1935:37 HELLO ciao

// 2

function salute(salutation, callback) {
    if (callback)
        setTimeout(() => {
            Math.random() < 0.8? callback(new Error(`ERROR ${salutation}`)) : callback(null, `HELLO ${salutation}`)
        }, (Math.random() + 1) * 1000)
    else
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                Math.random() < 0.8? reject(new Error(`ERROR ${salutation}`)) : resolve(`HELLO ${salutation}`)
            }, (Math.random() + 1) * 1000)
        })
}

/*
salute('hola', (error, result) => {
    if (error) {
        console.error(error)

        return salute('hello', (error, result) => {
            if (error) {
                console.error(error)

                return salute('ciao', (error, result) => {
                    if (error) {
                        console.error(error)

                        return salute('oi', (error, result) => {
                            if (error) {
                                console.error(error)

                                return salute('hallo', (error, result) => {
                                    if (error) {
                                        return console.error(error)
                                    }

                                    console.log(result)
                                })
                            }

                            console.log(result)
                        })
                    }

                    console.log(result)
                })
            }

            console.log(result)
        })
    }

    console.log(result)
})*/


/*salute('hola')
    .then(result => console.log(result))
    .catch(error => {
        console.error(error)

        return salute('hello')
            .then(result => console.log(result))
            .catch(error => {
                console.error(error)

                return salute('ciao')
                    .then(result => console.log(result))
                    .catch(error => {
                        console.error(error)

                        return salute('oi')
                            .then(result => console.log(result))
                            .catch(error => {
                                console.error(error)

                                return salute('hallo')
                                    .then(result => console.log(result))
                                    .catch(error => {
                                        console.error(error)
                                    })
                            })
                    })
            })
    })*/


salute('hola')
    .catch(error => {
        console.error(error)

        return salute('hello')
    })
    .catch(error => {
        console.error(error)

        return salute('ciao')
    })
    .catch(error => {
        console.error(error)

        return salute('oi')
    })
    .catch(error => {
        console.error(error)

        return salute('hallo')
    })
    .catch(error => {
        console.error(error)
    })
    .then(result => console.log(result))
    

Promise {<pending>}
VM3297:89 Error: ERROR hola
    at <anonymous>:9:45
(anonymous) @ VM3297:89
Promise.catch (async)
(anonymous) @ VM3297:88
VM3297:94 Error: ERROR hello
    at <anonymous>:9:45
(anonymous) @ VM3297:94
Promise.catch (async)
(anonymous) @ VM3297:93
VM3297:111 HELLO ciao