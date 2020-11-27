const docs = []

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
        findOne(email)
            .then(user => {
                if (user) throw new Error(`user with e-mail ${email} already exists`)
                
                user = { email }

                return insertOne(user)
            })
            .then(result => {
                console.log(result)
            })

let chain = Promise.resolve()

chain = chain.then(() => registerUser('manuel@barzi.com'))
chain.catch(console.error)

chain = chain.then(() => registerUser('manuel@barzi.com'))
chain.catch(console.error)

chain = chain.then(() => registerUser('mercedes@barzi.com'))
chain.catch(console.error)

chain = chain.then(() => registerUser('andres@barzi.com'))
chain.catch(console.error)


console.log('world does not stop...')


/*
VM10987:45 world does not stop...
undefined
VM10987:27 1
Error: user with e-mail manuel@barzi.com already exists
    at <anonymous>:20:33
Promise.catch (async)
(anonymous) @ VM10987:36
Error: user with e-mail manuel@barzi.com already exists
    at <anonymous>:20:33
Promise.catch (async)
(anonymous) @ VM10987:39
Error: user with e-mail manuel@barzi.com already exists
    at <anonymous>:20:33
Promise.catch (async)
(anonymous) @ VM10987:42
*/