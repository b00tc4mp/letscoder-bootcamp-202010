const asyncStuff = name => 
    new Promise((resolve, reject) => 
        setTimeout(() => {
            console.log(name)

            resolve('RESOLVED ' + name)
        }, (1 + Math.random()) * 1000))

const registerUser = email =>
    asyncStuff('check user exists ' + email)
        .then(result => {
            console.log(result)
    
            return asyncStuff('insert user ' + email)
        })
        .then(result => {
            console.log(result)
        })


registerUser('manuel@barzi.com')
registerUser('manuel@barzi.com')

/*
Promise {<pending>}
VM8162:4 check user exists manuel@barzi.com
VM8162:12 RESOLVED check user exists manuel@barzi.com
VM8162:4 check user exists manuel@barzi.com
VM8162:12 RESOLVED check user exists manuel@barzi.com
VM8162:4 insert user manuel@barzi.com
VM8162:17 RESOLVED insert user manuel@barzi.com
VM8162:4 insert user manuel@barzi.com
VM8162:17 RESOLVED insert user manuel@barzi.com
*/