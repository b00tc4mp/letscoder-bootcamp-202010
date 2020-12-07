require('dotenv').config()

const mongoose = require('mongoose')
const { Recipe } = require('../models') 


const { env: { MONGODB_URL } } = process

mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => {
        Recipe.create({text: `        
    \n\n Me encanta la Navidad, aunque suene absurdo, me sigo emocionando cada vez que escucho una canción, veo luces, me aparecen las películas navideñas en Netflix…

    \n\n Por lo tanto, a partir de ahora muchas de las recetas que suba, serán versiones de Navidad.

    \n\n **INGREDIENTES:**
    \n\n 🎄 100gr de harina de avena
    \n\n 🎄 50gr de harina de almendra
    \n\n 🎄 2 huevos
    \n\n 🎄 2 yogures o 150gr de queso fresco batido
    \n\n 🎄 Esencia de vainilla
    \n\n 🎄 Media cucharadita de levadura
    \n\n 🎄 Stevia al gusto

    \n\n **Para el relleno:** 1,5 cazos de proteína de chocolate, una cucharada de cacao en polvo y unas gotitas de leche.

    \n\n **Para el topping:** 100gr de queso fresco batido, cacao desgrasado, 2 láminas de gelatina y stevia al gusto.

    \n\n **ELABORACIÓN:**
    \n\n Precalentamos el horno a 180° arriba y abajo.

    \n\n En un recipiente batimos bien todos los ingredientes de nuestra base.

    \n\n Una vez que consigamos una textura homogénea, ponemos papel de horno en la bandeja del horno, engrasamos con unas gotitas de aceite y vertemos nuestra masa directamente, para que quede toda la bandeja cubierta (tipo alfombra rectangular).

    \n\n Metemos al horno durante 15 o 20 minutos hasta que esté hecho (cuidado, no te pases o se quiebra la masa)

    \n\n Cuando esté hecho, sacamos y dejamos enfriar

    \n\n **Para el relleno:** Mezclamos los ingredientes hasta conseguir una textura tipo Nutella.

    \n\n Una vez que el bizcocho esté a temperatura ambiente, lo ponemos sobre film transparente y untamos nuestro relleno. Con cuidado, vamos enrollando nuestro tronco, lo envolvemos bien apretado en film transparente y metemos nuestro tronco a la nevera durante 2-3 horas.

    \n\n Cuando ha pasado ese tiempo, ponemos las láminas de gelatina a hidratar y en una taza mezclamos el queso fresco batido, cacao y stevia. Derretimos la gelatina en 30ml de leche caliente y mezclamos todo. Dejamos reposar 10 min en la nevera y después, vertemos sobre nuestro tronco.

    \n\n Metemos a la nevera 1 hora, sacamos, decoramos con coco rallado (opcional) y ¡Listo!

    \n\n ¿Te animas a hacerlo? `,
        title: '### TRONCO DE NAVIDAD'})
            .then(() => console.log('Recipe inserted'))
            .catch(error => console.error('There was an error: ', error))
    })      