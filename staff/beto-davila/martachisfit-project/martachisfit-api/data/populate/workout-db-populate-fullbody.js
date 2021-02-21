require('dotenv').config()

const mongoose = require('mongoose')
const { Workout } = require('../martachisfit-data') 

const { env: { MONGODB_URL } } = process

mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => {
        Workout.create(
            { name: 'Full Body (cuerpo entero)', level: 'beginner', daysWeek: '3', setsWeek: '60-70',
            layout: `#### Día 1
            \n **Pecho** - Press de banca - 4 series de 8 repeticiones
            \n **Espalda** - Jalón al pecho - 4 series de 10 repeticiones
            \n **Hombro** - Press de hombro con mancuernas - 4 series de 10 repeticiones
            \n **Cuádriceps** - Extensión de pierna - 4 series de 10 repeticiones
            \n **Bíceps** - Curl de bíceps con barra - 3 series de 10 repeticiones
            \n **Tríceps** - Tríceps con cuerda - 3 series de 15 repeticiones

            \n\n #### Día 2
            \n **Pierna** - Prensa de pierna - 4 series de 8 repeticiones
            \n **Tríceps** - Extensión de brazos sobre la cabeza - 3 series de 15 repeticiones
            \n **Bíceps** - Curl con barra Z - 4 series de 10 repeticiones
            \n **Pecho** - Press en máquina de pecho - 4 series de 10 repeticiones
            \n **Espalda** - Remo en barra T - 4 series de 10 repeticiones
            \n **Hombro** - Elevaciones laterales con mancuernas - 3 series de 20 repeticiones

            \n\n #### Día 3
            \n **Hombro** - Remo al mentón con barra Z - 3 series de 12 repeticiones
            \n **Espalda** - Jalón al pecho con agarre cerrado - 4 series de 12 repeticiones
            \n **Pecho** - Cruces de pecho en polea - 4 series de 12 repeticiones
            \n **Pierna** - Sentadillas - 4 series de 8 repeticiones
            \n **Tríceps** - Press 'Francés' - 3 series de 15 repeticiones
            \n **Bíceps** - Curl martillo - 3 series de 12 repeticiones
            `,
            description: `Rutina que se enfoca en trabajar todos los músculos principales del cuerpo en cada una de las sesiones de la semana. 
            \n El volumen de entrenamiento es bajo y la frecuencia es alta (x3 semana), con lo cual es una rutina muy adecuada para el individuo principiante. 
            \n Al ser la frecuencia alta, se trabajan los mismos grupos musculares hasta tres veces por semana, algo muy efectivo para crear una adaptación rápida en
            principiantes con los ejercicios básicos, lo cual es precisamente lo que se busca generar en este nivel.`
            }
            )
            .then(() => console.log('Workout inserted'))
            .catch(error => console.error('There was an error: ', error))
    })