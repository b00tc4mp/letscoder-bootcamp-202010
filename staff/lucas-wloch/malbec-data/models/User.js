const { Schema, model } = require('mongoose')
const user = require('./schemas/user')

// const userSchema = new Schema({
//     fullname: {
//         type: String,
//         required: [true, 'Please add a fullname'],
//     },
//     email: {
//         type: String,
//         required: [true, 'Please add an email'],
//         unique: true,
//         validate: {
//             validator: email => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email),
//             message: props => `${props.value} is not a valid e-mail`
//         }
//     },
//     password: {
//         type: String,
//         required: [true, 'Please add a password'],
//         minlength: 3
//     }
// })

module.exports = model('User', user)