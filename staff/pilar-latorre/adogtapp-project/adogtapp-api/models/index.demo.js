require('dotenv').config()
const { Shelter, Pet } = require('.')

const { env: { MONGODB_URL } } = process

const mongoose = require('mongoose')

mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => {
        const shelter = new Shelter({
            shelterName: 'S.O.S Animalicos Zaragoza',
            email: 'notienen@mail.com',
            password: '123123123',
            address: 'Calle de Cristóbal Colón, 6, 8',
            city: 'Zaragoza',
            phone: 693742521
        })

        const pet = new Pet({
            name: 'India',
            breed: 'unknow',
            color: 'negro',
            description: 'it´s a lovely dog, 4 years old',
            shelter: shelter._id
        })

        return Promise.all([shelter.save(), pet.save()])
    })
    .catch(console.error)
    .then(() => mongoose.disconnect())
    .then(() => console.log('ended'))