const { validateTags } = require('./helpers/validations')
const { NotFoundError } = require('../errors')
const { User } = require('../models')

module.exports = tags => {
    validateTags(tags)

    debugger
    return User
    .find({ tags: { query } }).lean()
        .then(users=>{
            debugger
            if(!users) new NotFoundError(`artists with these genres ${tags} not found`)

            users.forEach(user =>{
                const {_id} = user
                user.id =_id.toString()
                
                delete user._id
                delete user.password
            return users
        })
    })
}