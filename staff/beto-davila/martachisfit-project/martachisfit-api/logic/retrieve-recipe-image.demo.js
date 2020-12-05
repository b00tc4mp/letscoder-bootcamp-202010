require('dotenv').config()
const mongoose = require('mongoose')
const { Recipe } = require('../models')
const fs = require('fs')

const imgPath = '../data/test-img/donuts-blue-png'

const { MONGODB_URL } = process.env

// const retrieveRecipesImg = require('./retrieve-recipes-img')

mongoose.connect(MONGODB_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
    try {
        retrieveRecipesImg('')
        .then(console.log)
        .catch(error => console.log('could not retrieve recipes', error))
        .then(() => mongoose.disconnect())
        .then(() => console.log('client closed'))
        
    } catch (error) {
        console.log('validation error', error)
    }

})