const { validateTags } = require('./helpers/validations')
const { NotFoundError } = require('../errors')
const { User } = require('../models')

module.exports = myTags => {
validateTags(myTags)
    return User
    .find({ tags: myTags }).lean()
    .then(users=>{
        if(!users) new NotFoundError(`artists with these genres ${myTags} not found`)

            users.forEach(user =>{
                // const {_id} = user
                // user.id =_id.toString()
                
                // delete user._id
                delete user.password
            })
            return users
    })
}