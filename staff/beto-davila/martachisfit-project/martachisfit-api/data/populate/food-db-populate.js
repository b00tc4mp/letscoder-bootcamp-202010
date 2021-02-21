require('dotenv').config()

const { models: { Food }, mongoose } = require('martachisfit-data')

const { env: { MONGODB_URL } } = process

mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => {
        Food.insertMany([
            { name: "Arroz blanco", serving: 30, calories: 112, carbs: 25, protein: 2, fats: 0 },
            { name: "Avena", serving: 30, calories: 110, carbs: 19, protein: 5, fats: 2 },
            { name: "Pollo pechuga", serving: 100, calories: 125, carbs: 2, protein: 28, fats: 2 },
            { name: "Pescado blanco", serving: 100, calories: 134, carbs: 1, protein: 20, fats: 2 },
            { name: "Queso fresco light", serving: 100, calories: 100, carbs: 5, protein: 10, fats: 2 },
            { name: "Queso curado", serving: 30, calories: 106, carbs: 1, protein: 6, fats: 8 },
            { name: "Naranja", serving: 1, calories: 75, carbs: 20, protein: 1, fats: 0 },
            { name: "Ternera", serving: 100, calories: 159, carbs: 0, protein: 29, fats: 5 },
            { name: "Manzana", serving: 1, calories: 72, carbs: 20, protein: 0, fats: 0 },
            { name: "Nueces", serving: 30, calories: 183, carbs: 4, protein: 4, fats: 18 },
            { name: "Pasta", serving: 140, calories: 220, carbs: 43, protein: 8, fats: 1 },
            { name: "Atún en aceite (lata)", serving: 1, calories: 125, carbs: 0, protein: 12, fats: 10 },
            { name: "Patata (1 grande)", serving: 1, calories: 250, carbs: 55, protein: 6, fats: 0 },
            { name: "Huevo (unidad)", serving: 1, calories: 80, carbs: 0, protein: 6, fats: 5 },
            { name: "Pan integral (rebanada)", serving: 1, calories: 92, carbs: 15, protein: 4, fats: 2 },
            { name: "Salmon", serving: 130, calories: 210, carbs: 0, protein: 28, fats: 10 },
            { name: "Leche semi (vaso)", serving: 1, calories: 107, carbs: 11, protein: 8, fats: 4 },
            { name: "Garbanzos cocidos", serving: 100, calories: 90, carbs: 10, protein: 6, fats: 2 },
            { name: "Chocolate negro (onza)", serving: 1, calories: 115, carbs: 4, protein: 2, fats: 9 },
            { name: "Almendras", serving: 30, calories: 200, carbs: 3, protein: 9, fats: 17 },
            { name: "Piña", serving: 100, calories: 74, carbs: 19, protein: 1, fats: 0 }
        ])
            .then(() => console.log('Data inserted'))
            .catch(error => console.error('There was an error: ', error))
    })