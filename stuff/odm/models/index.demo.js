require('dotenv').config()

const mongoose = require('mongoose')
const { User, Car } = require('.')

const { env: { MONGODB_URL } } = process

mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true })
    // 0
    // .then(() =>
    //     User.findOne({ email: 'pe@luquito.com' })
    // )
    // .then(({ _id }) =>
    //     Car.find({ owner: _id })
    // )

    // 1
    // .then(() => 
    //     Car.findById('5fd252975181e248d57fc658').populate('owner')
    // )
    /*
    {
        _id: 5fd252975181e248d57fc658,
        name: 'Car Five',
        owner: {
            likes: [
            5fd252975181e248d57fc65a,
            5fd252975181e248d57fc65b,
            5fd252975181e248d57fc65c
            ],
            _id: 5fd252975181e248d57fc655,
            name: 'Pe Luquito',
            email: 'pe@luquito.com',
            password: '123123123',
            __v: 1
        },
        __v: 0
    }
    */

    // 2
    // .then(() => 
    //     User.find({})
    // )
    // .then(([user1, user2]) =>  {
    //     return Car.find({ owner: user1._id })
    //         .then(cars => {
    //             const likes = cars.map(({_id}) => _id)

    //             user2.likes = likes

    //             return user2.save()
    //         })
    // })
    // .then(user2 => 
    //     User.findById(user2._id).populate('likes')
    // )
    /*
    {
        likes: [
            {
            _id: 5fd252975181e248d57fc65a,
            name: 'Car One',
            owner: 5fd252975181e248d57fc654,
            __v: 0
            },
            {
            _id: 5fd252975181e248d57fc65b,
            name: 'Car Two',
            owner: 5fd252975181e248d57fc654,
            __v: 0
            },
            {
            _id: 5fd252975181e248d57fc65c,
            name: 'Car Three',
            owner: 5fd252975181e248d57fc654,
            __v: 0
            }
        ],
        _id: 5fd252975181e248d57fc655,
        name: 'Pe Luquito',
        email: 'pe@luquito.com',
        password: '123123123',
        __v: 1
    }
    */

    .then(console.log)
    .catch(console.error)
    .then(mongoose.disconnect)