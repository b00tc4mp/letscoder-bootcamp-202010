const registerUser = require('./register-user')

registerUser('Rosa Melano', 'rosamelano@mail.com', '123123', console.log)
console.log(1)
registerUser('Rosa Melano', 'rosamelano@mail.com', '123123', console.log)
console.log(2)
registerUser('Rosa Melano', 'rosamelano@mail.com', '123123', console.log)
console.log(3)

setTimeout(() => {
    registerUser('Rosa Melano', 'rosamelano@mail.com', '123123', console.log)
    console.log(1)
    registerUser('Rosa Melano', 'rosamelano@mail.com', '123123', console.log)
    console.log(2)
    registerUser('Rosa Melano', 'rosamelano@mail.com', '123123', console.log)
    console.log(3)
}, 3000) 