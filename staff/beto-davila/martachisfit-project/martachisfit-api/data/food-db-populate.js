require('dotenv').config()

const mongoose = require('mongoose')
// const { User } = require('../models')
const { Food } = require('../models') 

const { env: { MONGODB_URL } } = process

mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => {
        Food.insertMany([
            {name: "Arroz", serving: 100, calories: 332, carbs: 73, protein: 8, fats: 2},
            {name: "Avena", serving: 100, calories: 389, carbs: 65, protein: 15, fats: 7},
            {name: "Pollo (pechuga)", serving: 100, calories: 125, carbs: 2, protein: 28, fats: 2},
            {name: "Pescado (blanco)", serving: 100, calories: 134, carbs: 1, protein: 20, fats: 2},
            {name: "Queso fresco", serving: 100, calories: 300, carbs: 3, protein: 20, fats: 20},
            {name: "Naranja", serving: 1, calories: 75, carbs: 20, protein: 1, fats: 0},
            {name: "Ternera", serving: 100, calories: 230, carbs: 0, protein: 29, fats: 10},
            {name: "Manzana", serving: 1, calories: 72, carbs: 20, protein: 0, fats: 0}
            ])
            .then(() => console.log('Data inserted'))
            .catch(error => console.error('There was an error: ', error))
    })