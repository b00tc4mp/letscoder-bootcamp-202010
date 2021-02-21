const { Schema, ObjectId } = require('mongoose')

module.exports = new Schema({
    fullname: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: email => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email),
            message: props => `${props.value} is not a valid e-mail`
        }
    },

    password: {
        type: String,
        required: true,
        minlength: 3
    },

    calories: {
        type: Number,
        required: true
    },

    gender: {
        type: String,
        enum: ['hombre', 'mujer']
    },

    weightHistory: [
        { type: Object, weight: Number, modifiedAt: new Date }
    ],

    vegan: {
        type: Boolean
    },

    chosenFoods: {
        type: [ObjectId]
    },

    savedArticles: {
        type: [ObjectId]
    },

    savedRecipes: {
        type: [ObjectId]
    },

    role: {
        type: String,
        enum: ['admin', 'user']
    },

    dietId: {
        type: ObjectId
    },

    myWorkouts: {
        type: [ObjectId]
    }
})