require('dotenv').config()

const mongoose = require('mongoose')
// const { User } = require('../models')
const { Diet } = require('../models') 

const { env: { MONGODB_URL } } = process

mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => {
        Diet.insertMany([
            {type: "keto", calories: 1500, 
                meals: {
                    meal1: "Tortilla (2 huevos) de queso, espinacas y aceitunas negras",
                    meal2: "Ensalada grande variada con 1/2 aguacate y nueces",
                    meal3: "Pasta de calabacín a la Alfredo"
                },
                macros: {
                    carbs: "10%",
                    fats:  "75%",
                    protein: "15%"
                },
            },

            {type: "keto", calories: 2300, 
                meals: {
                    meal1: "Tortitas 'Keto' con mantequilla de almendra",
                    meal2: "Lomo de salmón con salsa holandesa",
                    meal3: "Trasero de pollo con guacamole"
                },
                macros: {
                    carbs: "10%",
                    fats:  "70%",
                    protein: "20%"
                },
            },

            {type: "mediterranean", calories: 1500, 
                meals: {
                    meal1: "Bowl de cereales (tipo avena) con yogur natural y pieza de fruta",
                    meal2: "Judías verdes estofadas, filete de pollo (tamaño palma de tu mano) y onza de chocolate negro",
                    meal3: "Merluza con verduras salteadas y fruta de temporada"
                },
                macros: {
                    carbs: "35%",
                    fats:  "35%",
                    protein: "30%"
                },
            },

            {type: "mediterranean", calories: 2300, 
                meals: {
                    meal1: "Dos rebanadas de pan con aceite y jamón/pavo. Una pieza de fruta",
                    meal2: "1 yogur con un puñado pequeño de frutos secos",
                    meal3: "Ensalada variadas con lentejas, 2 latas de atún y aceite de oliva",
                    meal4: "Tortilla de 2 huevos con jamón y una pieza de fruta"
                },
                macros: {
                    carbs: "35%",
                    fats:  "30%",
                    protein: "35%"
                },
            },

            {type: "vegan", calories: 1500, 
                meals: {
                    meal1: "Dos yogures de soja con un puñado de copos de avena",
                    meal2: "Macarrones integrales, verduras a la plancha y soja texturizada",
                    meal3: "Ensalada variada con quinoa y dados de tempeh"
                },
                macros: {
                    carbs: "45%",
                    fats:  "25%",
                    protein: "30%"
                },
            },

            {type: "vegan", calories: 2300, 
                meals: {
                    meal1: "Un vaso de bebida vegetal con dos puñados de cereales sin azúcar",
                    meal2: "Ensalada de tomate y pepino. Garbanzos con espinacas y patata",
                    meal3: "Una pieza de fruta y un puñado de frutos secos",
                    meal4: "Quinoa con verduras variadas y seitán"
                },

                macros: {
                    carbs: "40%",
                    fats:  "25%",
                    protein: "35%"
                },
            }

            ])
            .then(() => console.log('Diets inserted'))
            .catch(error => console.error('There was an error: ', error))
    })