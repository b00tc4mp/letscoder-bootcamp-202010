const registerUser = require('./register-user.3')

registerUser('Cristian Manzano', 'mr.cristian95@gmail.com', '123123123', console.log)
console.log(1)
registerUser('Cristian Manzano', 'mr.cristian95@gmail.com', '123123123', console.log)
console.log(2)
registerUser('Cristian Manzano', 'mr.cristian95@gmail.com', '123123123', console.log)
console.log(3)

setTimeout(() => {
    registerUser('Cristian Manzano', 'mr.cristian95@gmail.com', '123123123', console.log)
console.log(1)
registerUser('Cristian Manzano', 'mr.cristian95@gmail.com', '123123123', console.log)
console.log(2)
registerUser('Cristian Manzano', 'mr.cristian95@gmail.com', '123123123', console.log)
console.log(3)
}, 3000)