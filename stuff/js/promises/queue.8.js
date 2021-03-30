const docs = []

let chain = Promise.resolve()

const semaphore = callback => chain = chain.then(callback, callback)

const asyncStuff = callback => 
    new Promise((resolve, reject) => 
        setTimeout(() => {
            try {
                resolve(callback())
            } catch(error) {
                reject(error)
            }
        }, (1 + Math.random()) * 1000))

const findOne = criteria => asyncStuff(() => docs.find(user => user.email === criteria))
const insertOne = doc => asyncStuff(() => docs.push(doc))


const registerUser = email =>
    semaphore(() =>
        findOne(email)
            .then(user => {
                if (user) throw new Error(`user with e-mail ${email} already exists`)
                
                user = { email }

                return insertOne(user)
            })
            .then(result => {
                console.log(result)
            })
    )

registerUser('manuel@barzi.com').catch(console.error)
registerUser('manuel@barzi.com').catch(console.error)
registerUser('manuel@barzi.com').catch(console.error)
registerUser('mercedes@barzi.com').catch(console.error)
registerUser('andres@barzi.com').catch(console.error)

console.log('world does not stop...')

/*
VM14008:42 world does not stop...
undefined
VM14008:32 1
Error: user with e-mail manuel@barzi.com already exists
    at <anonymous>:25:33
Promise.catch (async)
(anonymous) @ VM14008:37
Error: user with e-mail manuel@barzi.com already exists
    at <anonymous>:25:33
Promise.catch (async)
(anonymous) @ VM14008:38
VM14008:32 2
*/