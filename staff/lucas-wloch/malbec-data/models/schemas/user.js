const { Schema } = require('mongoose')

module.exports = new Schema({
    fullname: {
        type: String,
        required: [true, 'Please add a fullname'],
    },
    email: {
        type: String,
        required: [true, 'Please add an email'],
        unique: true,
        validate: {
            validator: email => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email),
            message: props => `${props.value} is not a valid e-mail`
        }
    },
    password: {
        type: String,
        required: [true, 'Please add a password'],
        minlength: 3
    } // o implementar verificacion con telefono
    // type [ owner, client ]
    // phoneNumber: {
    //     type: String,
    //     trim: true,
    //     maxlength: [11, 'Phone number cannot have more than 11 characters']
    // },
    // historial-pedidos: {
    //     [product-name]: ammount = Number/String
    // }
})

