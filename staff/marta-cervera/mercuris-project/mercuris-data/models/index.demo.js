require('dotenv').config()

const {User, Product} = require('.')

const { env:{ MONGODB_URL }} = process

const mongoose = require('mongoose')

mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true} )
    .then(() => {
        const user = new User({
            name: 'Flores Paca',
            email: 'florespaca@mail.com',
            password: '1234567',
            contact: 'Puede contactar con Paca, en el siguiente horario 14.00-16.00'
        })

        const product = new Product({
            owner: user.id,
            name: 'Flores',
            description: 'Mejores flores a buen precio',
            price: 25
        })

        return Promise.all([user.save(), product.save()])
    })
    .catch(console.error)
    .then(() => mongoose.disconnect())
    .then(() => console.log('ended'))