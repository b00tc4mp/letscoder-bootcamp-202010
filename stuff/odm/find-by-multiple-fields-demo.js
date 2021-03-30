require('dotenv').config()

const { env: { MONGODB_URL } } = process

const mongoose = require('mongoose')
const { Schema, Types: { ObjectId } } = mongoose

// mongoose.set('debug', true)

const location = new Schema({
    type: {
        type: String,
        enum: ['Point'],
        required: true,
        default: 'Point'
    },
    coordinates: {
        type: [Number],
        required: true
    }
})

const user = new Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: location,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['person', 'shelter'],
        default: 'shelter'
    }
})

const pet = new Schema({
    name: {
        type: String,
        required: true
    },

    breed: {
        type: String,
        required: true
    },

    species: {
        type: String,
        required: true
    },

    color: {
        type: String
    },

    description: {
        type: String
    },

    shelter: {
        type: ObjectId,
        ref: 'User'
    },

    price: {
        type: Number
    }
})


// db.users.createIndex({ location: '2dsphere' })
// db.users.createIndex({ name: 'text', email: 'text', description: 'text' })



const Location = mongoose.model('Location', location)
const User = mongoose.model('User', user)
const Pet = mongoose.model('Pet', pet)


mongoose.connect(MONGODB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    // useCreateIndex: true // JUST necessary in case of index creation through mongoose (to avoid ensureIndex)
})
    .then(() => Promise.all([User.deleteMany(), Pet.deleteMany()]))
    .then(() => {
        const saves = []

        for (let i = 0; i < 10; i++) {
            const location = new Location({ coordinates: [i * 10, i * 10] })
            const user = new User({
                name: `name-${i}`,
                location,
                email: `email-${i}@mail.com`,
                password: `password-${i}`,
                city: Math.random() > .5 ? 'Barcelona' : 'Madrid',
                description: Math.random() > .5 ? 'Lorem ipsum' : 'Hello World'
            })

            saves.push(user.save())
        }

        return Promise.all(saves)
    })
    .then(users => {
        const saves = []

        users.forEach(({ _id }, i) => {
            for (let j = 0; j < 10; j++) {
                const pet = new Pet({
                    name: `name-${i}-${j}`,
                    breed: Math.random() > .5 ? 'mixed' : 'clumsy',
                    name: Math.random() > .5 ? 'black' : 'white',
                    species: Math.random() > .5 ? 'cat' : 'dog',
                    shelter: _id,
                    price: Math.random() > .5 ? 100 : 50
                })

                saves.push(pet.save())
            }
        })

        return Promise.all(saves)
    })

    /*.then(() => {
        const coords = [0, 0]
        const distance = 1000 * 1000 * 10
        // const query = 'barcelona'
        const query = 'REM'
        const city = 'madrid'

        return User.find({
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: coords
                    },
                    $maxDistance: distance // TRY this last with 10, 9.7, 9.5, ...
                }
            },
            // $text: { $search: query, $caseSensitive: false, $diacriticSensitive: false },
            $or: [
                { name: { $regex: new RegExp(query, 'i') } },
                { email: { $regex: new RegExp(query, 'i') } },
                { description: { $regex: new RegExp(query, 'i') } }
            ],
            city: { $regex: new RegExp(city, 'i') }
        })
    })
    // .then(users => console.log(users))
    .then(users => {
        const ids = users.map(({ _id }) => _id)

        console.log(ids)

        const species = 'cat'
        const breed = 'mixed'

        return Pet.find({
            shelter: { $in: ids },
            species: species,
            breed: breed
        })
    })
    .then(pets => console.log(pets))*/

    .then(() => User.findOne({ email: 'email-9@mail.com'}))
    .then(user => {
        console.log(user)

        // const userId = user._id.toString()
        const userId = undefined
        const coords = [0, 0]
        const distance = 1000 * 1000 * 13
        // const query = 'barcelona'
        const query = 'REM'
        // const city = 'madrid'
        const city = undefined
        // const species = 'cat'
        const species = undefined
        const breed = 'mixed'
        // const price = 50
        const price = undefined
        const priceMin = 70
        const priceMax = 120

        return findPets(userId, query, city, coords, distance, species, breed, price, priceMin, priceMax)
    })
    .then(pets => console.log(pets))

    .then(mongoose.disconnect)


const findPets = (userId, query, city, coords, distance, species, breed, price, priceMin, priceMax) => {
    const criteria = {}

    if (userId)
        criteria._id = ObjectId(userId)

    if (query)
        criteria.$or = [
            { name: { $regex: new RegExp(query, 'i') } },
            { email: { $regex: new RegExp(query, 'i') } },
            { description: { $regex: new RegExp(query, 'i') } }
        ]

    if (city)
        criteria.city = { $regex: new RegExp(city, 'i') }

    if (coords && distance)
        criteria.location = {
            $near: {
                $geometry: {
                    type: 'Point',
                    coordinates: coords
                },
                $maxDistance: distance
            }
        }

    return User.find(criteria).lean()
        .then(users => {
            const ids = users.map(({ _id }) => _id)

            console.log(ids)

            const criteria = {
                shelter: { $in: ids }
            }

            if (species)
                criteria.species = { $regex: new RegExp(species, 'i') }

            if (breed)
                criteria.breed = { $regex: new RegExp(breed, 'i') }

            if (price >= 0)
                criteria.price = price
            else
                if (priceMin >= 0 && typeof priceMax === 'undefined')
                    criteria.price = { $gte: priceMin }
                else if (priceMax >= 0 && typeof priceMin === 'undefined')
                    criteria.price = { $lte: priceMax }
                else if (priceMin >= 0 && priceMax >= priceMin)
                    criteria.price = { $gte: priceMin, $lte: priceMax }

            return Pet.find(criteria).lean()
        })
        .then(pets => {
            pets.forEach(pet => {
                const { _id } = pet

                pet.id = _id.toString()

                delete pet._id
            })

            return pets
        })
}