require('dotenv').config()

const { env: { MONGODB_URL } } = process

const mongoose = require('mongoose')
const { Schema, Schema: { Types: { ObjectId } } } = mongoose

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
    }
})


// db.users.createIndex({ location: '2dsphere' })
// db.users.createIndex({ name: 'text', email: 'text', city: 'text', description: 'text' })



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
                const pet = new Pet({ name: `name-${i}-${j}`, breed: Math.random() > .5 ? 'mixed' : 'clumsy', name: Math.random() > .5 ? 'black' : 'white', species: Math.random() > .5 ? 'cat' : 'dog', shelter: _id })

                saves.push(pet.save())
            }
        })

        return Promise.all(saves)
    })
    .then(() => {
        const coords = [0, 0]
        const distance = 1000 * 1000 * 15
        // const query = 'barcelona'
        const query = 'lorem'
        const city = 'madrid'

        return User.find({
            // location: {
            //     $near: {
            //         $geometry: {
            //             type: 'Point',
            //             coordinates: coords
            //         },
            //         $maxDistance: distance // TRY this last with 10, 9.7, 9.5, ...
            //     }
            // },
            $text: { $search: query, $caseSensitive: false, $diacriticSensitive: false },
            city: { $regex: new RegExp(city, 'i') }
        })
    })
    .then(users => console.log(users))
    .then(mongoose.disconnect)
/*
const cities = await City.find({
    location: {
        $near: {
            $geometry: {
                type: 'Point',
                coordinates: [0, 0]
            },
            $maxDistance: 1000 * 1000 * 11 // TRY this last with 10, 9.7, 9.5, ...
        }
    }
})

assert.equal(cities.length, 10, `all cities`)

const cities = await City.find({
    location: {
        $near: {
            $geometry: {
                type: 'Point',
                coordinates: [0, 0]
            },
            $maxDistance: 1000 * 1000 * 10
        }
    }
})

assert.equal(cities.length, 9, `all cities except 9`)


const cities = await City.find({
    location: {
        $near: {
            $geometry: {
                type: 'Point',
                coordinates: [0, 0]
            },
            $maxDistance: 1000 * 1000 * 9.7
        }
    }
})


assert.equal(cities.length, 8, `all cities except 9 and 8`)

const cities = await City.find({
    location: {
        $near: {
            $geometry: {
                type: 'Point',
                coordinates: [0, 0]
            },
            $maxDistance: 1000 * 1000 * 9
        }
    }
})

// console.log(cities)

assert.equal(cities.length, 7, `all cities except 9, 8 and 7`)
*/
