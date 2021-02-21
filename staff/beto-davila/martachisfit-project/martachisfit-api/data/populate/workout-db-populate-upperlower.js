require('dotenv').config()

const mongoose = require('mongoose')
const { Workout } = require('../martachisfit-data') 

const { env: { MONGODB_URL } } = process

mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => {
        Workout.create(
            { name: 'Torso-Pierna', level: 'intermediate', daysWeek: '4', setsWeek: '80-90',
            layout: `#### Día 1 (Torso 1)
            \n **Pecho** - Press de banca - 3 series de 8 repeticiones
            \n **Espalda** - Remo con barra - 3 series de 10 repeticiones
            \n **Hombro** - Press de hombro con mancuernas - 3 series de 10 repeticiones
            \n **Pecho** - Máquina contractora - 2 series de 15 repeticiones
            \n **Espalda** - Jalón cerrado al pecho - 2 series de 12 repeticiones
            \n **Hombro** - Elevaciones laterales con mancuernas - 2 series de 15 repeticiones
            \n **Bíceps** - Curl de bíceps en polea - 3 series de 12 repeticiones
            \n **Tríceps** - Extensiones tríceps en polea - 3 series de 12 repeticiones

            \n\n #### Día 2 (Pierna 1)
            \n **Pierna completa** - Sentadillas - 3 series de 8 repeticiones
            \n **Femoral** - Peso Muerto "Rumano" - 3 series de 10 repeticiones
            \n **Gemelo** - Elevaciones de talón de pie- 3 series de 15 repeticiones
            \n **Femoral** - Curl de pierna tumbado - 2 series de 12 repeticiones
            \n **Cuádriceps** - Extensiones de pierna - 2 series de 15 repeticiones
            \n **Gemelo** - Elevaciones de talón sentado (opcional) - 3 series de 13 repeticiones
            \n **Abdomen** - "Crunches" en máquina - 3 series de 12 repeticiones
            \n **Femoral** - "Pull Through" en polea - 3 series de 12 repeticiones

            \n\n #### Día 3 (Torso 2)
            \n **Pecho** - Press inclinado con barra - 3 series de 8 repeticiones
            \n **Espalda** - Peso Muerto "rack" - 3 series de 6 repeticiones
            \n **Hombro** - Press Militar - 3 series de 10 repeticiones
            \n **Pecho** - Press en máquina - 2 series de 15 repeticiones
            \n **Espalda** - Dominadas - 2 series de máximas repeticiones
            \n **Hombro** - Press de hombro en máquina - 2 series de 12 repeticiones
            \n **Bíceps** - Curl con mancuernas - 3 series de 12 repeticiones
            \n **Tríceps** - Fondos en paralelas - 2 series de máximas repeticiones

            \n\n #### Día 4 (Pierna 2)
            \n **Pierna completa** - Prensa - 3 series de 12 repeticiones
            \n **Femoral** - Peso Muerto "piernas semirrígidas" con mancuernas - 3 series de 10 repeticiones
            \n **Gemelo** - Elevación de talón en prensa - 3 series de 15 repeticiones
            \n **Pierna completa** - Sentadilla "Hack" - 2 series de 12 repeticiones
            \n **Femoral** - Curl de pierna sentado - 2 series de 15 repeticiones
            \n **Gemelo** - Elevaciones de talón sentado (opcional) - 3 series de 13 repeticiones
            \n **Abdomen** - Planchas - 3 series de hasta 60"
            \n **Femoral** - Hiperextensiones - 3 series de 15 repeticiones
            `,
            description: `Se trata de una rutina de 4 días dividida dos a dos, en torso y pierna. Este enfoque trabaja a frecuencia 2, es decir, los principales
            \n grupos musculares son estimulados hasta dos veces por semana y el volumen de series por sesión es moderado. 
            \n Está especialmente indicada para individuos de nivel intermedio que requieren un volumen algo más alto que un principiante pero, 
            \n sin dejar de lado la oportunidad de trabajar los mismos músculos en una sesión sucesiva cercana en el tiempo y así seguir especializándose en el entrenamiento de los movimientos básicos.
            \n En cuanto a los descansos entre sesiones, se deja un día a mitad de semana y otros dos seguidos al final.
            `
            }
            )
            .then(() => console.log('Workout inserted'))
            .catch(error => console.error('There was an error: ', error))
    })