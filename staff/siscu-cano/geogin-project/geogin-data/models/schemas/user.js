const { Schema, Schema: { Types: { ObjectId } } } = require('mongoose')

const user = new Schema({
  fullname: {
    type: String,
    required: true,
    trim: true
  },

  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    validate: {
      validator: email =>
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          email
        ),
      message: props => `${props.value} is not a valid e-mail`
    }
  },

  password: {
    type: String,
    required: true,
    minlength: 8
  },

  image: {
    type: String,
    trim: true
  },

  score: {
    type: Number,
    default: 0,
    trim: true
  },

  favorites: [{
      type: ObjectId,
      ref: 'Quest'
    }]
}, { timestamps: true })

user.index({ fullname: 'text', email: 'text' })

module.exports = user