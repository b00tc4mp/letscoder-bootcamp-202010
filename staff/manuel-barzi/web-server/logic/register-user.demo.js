const registerUser = require('./register-user')

registerUser('manuel barzi', 'manuelbarzi@gmail.com', '123123123', console.log)
console.log(1)
registerUser('manuel barzi', 'manuelbarzi@gmail.com', '123123123', console.log)
console.log(2)
registerUser('manuel barzi', 'manuelbarzi@gmail.com', '123123123', console.log)
console.log(3)

//console.log('hello world')

setTimeout(() => {
    registerUser('manuel barzi', 'manuelbarzi@gmail.com', '123123123', console.log)
    console.log(1)
    registerUser('manuel barzi', 'manuelbarzi@gmail.com', '123123123', console.log)
    console.log(2)
    registerUser('manuel barzi', 'manuelbarzi@gmail.com', '123123123', console.log)
    console.log(3)
}, 3000)