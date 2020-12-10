require('dotenv').config()

const mongoose = require('mongoose')
const { Recipe } = require('../models') 


const { env: { MONGODB_URL } } = process

mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => {
        Recipe.create({text: `
            \n\n Quería probar qué tal saldría una versión fitness de mi turrón favorito y… ¡Vaya si he probado!

            \n\n Id tomando nota porque… ¡Arrancan las ideas de Navidad!
            
            \n\n **INGREDIENTES:**
            \n\n 🍫 100gr de almendra molida
            \n\n 🍫 60 gr de agua
            \n\n 🍫 70gr de proteína sabor turrón
            \n\n 🍫 12 almendras troceadas
            \n\n 🍫 Una pizquita de sal
            
            \n\n **ELABORACIÓN:**
            
            \n\n Mezclamos la almendra molida con agua hasta conseguir una textura tipo crema de almendras (ve echando agua poco a poco y removiendo, tiene que quedar como pastoso y untable)
            
            \n\n Después, incorporamos la proteína, la sal y las almendras troceadas.
            
            \n\n Amasamos bien y ponemos en un molde de silicona o en un film transparente dando forma de turrón.
            
            \n\n Metemos al congelador durante 2 horitas y ¡Listo para devorar!.
            
            \n\n Cuéntame si te animas a hacerlo.`       
        ,
        title: '### TURRÓN BLANDO',
        urlPathImg: 'https://res.cloudinary.com/beto-cloud-name/image/upload/v1607590830/turron-blando_pblczw.jpg'})
            .then(() => console.log('Recipe inserted'))
            .catch(error => console.error('There was an error: ', error))
    })      