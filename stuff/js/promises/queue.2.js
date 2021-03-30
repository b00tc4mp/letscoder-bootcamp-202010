// improvement

let chain = Promise.resolve()

const semaphore = callback => chain = chain.then(callback) //.then(callback)


const asyncStuff = name => 
    new Promise((resolve, reject) => 
        setTimeout(() => {
            console.log(name)

            resolve('RESOLVED ' + name)
        }, (1 + Math.random()) * 1000))

const registerUser = email =>
    semaphore(() =>
        asyncStuff('check user exists ' + email)
            .then(result => {
                console.log(result)

                return asyncStuff('insert user ' + email)
            })
            .then(result => {
                console.log(result)
            })
    )

registerUser('manuel@barzi.com')
registerUser('manuel@barzi.com')

/*
Promise {<pending>}
VM8577:9 check user exists manuel@barzi.com
VM8577:18 RESOLVED check user exists manuel@barzi.com
VM8577:9 insert user manuel@barzi.com
VM8577:23 RESOLVED insert user manuel@barzi.com
VM8577:9 check user exists manuel@barzi.com
VM8577:18 RESOLVED check user exists manuel@barzi.com
VM8577:9 insert user manuel@barzi.com
VM8577:23 RESOLVED insert user manuel@barzi.com
*/