const registerUser = require('./register-user')

registerUser('Armando Bronca', 'armando@mail2.es', '123123123', (error) => {
    if (error) return console.error(error.message)

    console.log('user registered :)')
})

registerUser('Armando Bronca2', 'armando@mail3.es', '123123123', (error) => {
    if (error) return console.error(error.message)

    console.log('user registered :)')
})

registerUser('Armando Bronca', 'armando@mail2.es', '123123123', (error) => {
    if (error) return console.error(error.message)

    console.log('user registered :)')
})