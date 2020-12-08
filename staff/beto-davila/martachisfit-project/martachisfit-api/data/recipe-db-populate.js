require('dotenv').config()

const mongoose = require('mongoose')
const { Recipe } = require('../models') 


const { env: { MONGODB_URL } } = process

mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => {
        Recipe.create({text: `
            \n\n El postre de nuestra infancia en versión saludable y encima, ¡súper fácil y rápido de hacer!

            \n\n Si te gusta la receta, coméntamelo y haz una captura de pantalla, a mí me anima mucho a seguir publicando, win-win!!
            
            \n\n **INGREDIENTES:**
            \n\n 👩‍🍳 200ml de clara de huevos
            \n\n 👩‍🍳 100ml de leche (la que uséis)
            \n\n 👩‍🍳 Esencia de vainilla
            \n\n 👩‍🍳 Stevia al gusto
            \n\n 👩‍🍳 Canela en polvo
            
            \n\n **ELABORACIÓN:**
            
            \n\n Es tan sencillo como batir las claras con la leche, la esencia de vainilla y la stevia en un bowl.
            
            \n\n Metemos el recipiente en el microondas en intervalos de 1 minuto (y vamos sacando y removiendo), en total suele hacerse en 3-4 minutos.
            
            \n\n Al sacarlo, batimos bien con la batidora, vertemos en recipientes y lo metemos a la nevera (mínimo 30′).
            
            \n\n Para servir, espolvoreamos canela por encima y !listas!`        
        ,
        title: '### NATILLAS FIT',
        urlPathImg: 'https://res.cloudinary.com/beto-cloud-name/image/upload/v1607405459/natillas_uywwtp.jpg'})
            .then(() => console.log('Recipe inserted'))
            .catch(error => console.error('There was an error: ', error))
    })      