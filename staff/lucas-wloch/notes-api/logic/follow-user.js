const { validateId, validateCallback } = require('./helpers/validations')

const context = require('./context')
const { env: { DB_NAME } } = process
const ObjectId = require('mongodb').ObjectId;


module.exports = (userId, followId) => {
    validateId(userId)
    validateId(followId)
    const { connection } = context

    const db = connection.db(DB_NAME)

    const users = db.collection('users')

    let _id = new ObjectId(userId)
    //users.findById(ObjectId)
    return users
        .findOne({ _id })
        .then(user => {
            if (user) {
                const { follows = [] } = user

                const index = follows.findIndex(objId => objId.toString() === followId)

                if (index > -1) follows.splice(index, 1)
                else follows.push(new ObjectId(followId))

                return users
                    .updateOne({ _id }, { $set: { follows } })
                    .then(result => undefined)

            } else throw new Error(`user with id ${userId} is not found`)

})

}