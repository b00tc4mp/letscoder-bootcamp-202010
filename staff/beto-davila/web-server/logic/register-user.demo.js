const registerUser = require('./register-user')

registerUser('Armando Bronca', 'armando@mail2.es', '123123123', (error) => {
    if (error) return console.error(error.message)

    console.log('the user was registered :)')
})