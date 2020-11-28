const { validateQuery } = require('./helpers/validations')
const { User } = require('../models')
const { NotFoundError } = require('../errors')

module.exports = query => {

    validateQuery(query)

    const cursor = User.find({ $or: [{fullname: new RegExp(query, 'i')}, {email: new RegExp(query, 'i') } ]})
        return cursor.lean()
            //.toArray()
            .then(_users => {

            if(_users) {

                delete _users[0].password
                delete _users[0]._id
                delete _users[0].followings
                //delete _users[0].email

                return _users
            }
            else
                throw new NotFoundError('No results')
    })

}