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

const link1 = chain.then(() => registerUser('manuel@barzi.com'))
link1.catch(console.error)
    
const link2 = link1.then(() => registerUser('manuel@barzi.com'))
link2.catch(console.error)

const link3 = link2.then(() => registerUser('mercedes@barzi.com'))
link3.catch(console.error)

const link4 = link3.then(() => registerUser('andres@barzi.com'))
link4.catch(console.error)


console.log('world does not stop...')

/*
VM12296:45 world does not stop...
undefined
VM12296:27 1
Error: user with e-mail manuel@barzi.com already exists
    at <anonymous>:20:33
Error: user with e-mail manuel@barzi.com already exists
    at <anonymous>:20:33
Error: user with e-mail manuel@barzi.com already exists
    at <anonymous>:20:33
*/
