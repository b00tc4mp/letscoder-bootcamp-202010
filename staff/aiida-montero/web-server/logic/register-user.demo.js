const registerUser = require('./register-user')

registerUser('aida', 'aida@mail.com', '123123123', console.log)
console.log(1)
registerUser('aida', 'aida@mail.com', '123123123', console.log)
console.log(2)
registerUser('aida', 'aida@mail.com', '123123123', console.log)
console.log(3)

setTimeout(() => {
    registerUser('manuel barzi', 'manuelbarzi@gmail.com', '123123123', console.log)
    console.log(1)
    registerUser('manuel barzi', 'manuelbarzi@gmail.com', '123123123', console.log)
    console.log(2)
    registerUser('manuel barzi', 'manuelbarzi@gmail.com', '123123123', console.log)
    console.log(3)
}, 3000)