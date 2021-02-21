require('dotenv').config()

const mongoose = require('mongoose')
const { Workout } = require('../martachisfit-data') 

const { env: { MONGODB_URL } } = process

mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => {
        Workout.create(
            { name: 'Clásica dividida (Weider)', level: 'advanced', daysWeek: '5', setsWeek: '90-100',
            layout: `#### Día 1 (Pecho)
            \n Press de banca - 3 series de 8 repeticiones
            \n Press inclinado con mancuernas - 3 series de 10 repeticiones
            \n Cruces en polea - 3 series de 10 repeticiones
            \n Press inclinado (máquina) - 3 series de 12 repeticiones
            \n Fondos en paralelas - 3 series de máximas repeticiones

            \n\n #### Día 2 (Pierna)
            \n Sentadillas - 3 series de 8 repeticiones
            \n Prensa de pierna - 3 series de 10 repeticiones
            \n Extensión de pierna - 3 series de 15 repeticiones
            \n Curl de pierna tumbado - 3 series de 12 repeticiones
            \n Elevaciones de talón (gemelo) - 3 series de 15 repeticiones

            \n\n #### Día 3 (Espalda)
            \n Peso Muerto - 3 series de 6-8 repeticiones
            \n Remo sentado ("Gironda") - 3 series de 12 repeticiones
            \n Jalón al pecho convencional - 3 series de 10 repeticiones
            \n Remo inclinado con barra- 3 series de 8 repeticiones
            \n Hiperextensiones - 3 series de 15 repeticiones
            \n Dominadas - 3 series de máximas repeticiones

            \n\n #### Día 4 (Brazos)
            \n Curl de bíceps con barra Z - 3 series de 10 repeticiones
            \n Curl "Martillo" - 3 series de 12 repeticiones
            \n Tríceps con cuerda - 3 series de 15 repeticiones
            \n Extensión de brazo sobre la cabeza (con mancuerna) - 3 series de 12 repeticiones
            \n Press "Francés" - 3 series de 12 repeticiones

            \n\n #### Día 5 (Hombros + core)
            \n Press "Militar" - 3 series de 8 repeticiones
            \n Elevaciones laterales con mancuernas - 3 series de 12 repeticiones
            \n Remo al mentón con barra Z - 3 series de 10 repeticiones
            \n "Encogimientos" para trapecio con mancuernas - 3 series de 12-15 repeticiones
            \n Planchas para abdomen - 3 series de hasta 60"
            \n Hombro posterior en máquina - 3 series de 15 repeticiones
            \n "Crunches" en máquina - 3 series de 12-15 repeticiones
            `,
            description: `Es la rutina más popular que creó tendencia en la época dorada del culturimo, con el gran Arnold "chuache" como su abanderado.
            \n Cada sesión de entrenamiento es dedicada a un grupo muscular, lo cual permite concentrar mucho volumen de series por músculo y por sesión.
            \n Debido a lo anterior, está especialmente destinada al dedicado individuo con años de entrenamiento a sus espaldas y que necesitan un volumen considerable para 
            \n generar un estímulo suficiente que les siga permitiendo mejorar, aunque ya en este punto de manera marginal.
            \n A partir de este punto, se añadirían más series e incluso algún día más de entrenamiento para "arañar" esas "ganancias" tan difíciles de conseguir en este nivel.
            `
            }
            )
            .then(() => console.log('Workout inserted'))
            .catch(error => console.error('There was an error: ', error))
    })