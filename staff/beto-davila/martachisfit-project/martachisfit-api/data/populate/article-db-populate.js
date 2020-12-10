require('dotenv').config()

const mongoose = require('mongoose')
const { Article } = require('../../models') 


const { env: { MONGODB_URL } } = process

mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => {
        Article.create({text: `### ENTRENAR SIN DESAYUNAR, ¿BUENO O MALO?

        \n\n #### El ayuno se considera tras 12 horas sin ingesta de alimentos
        
        \n\n #### Entrenar sin desayunar puede ser beneficioso para algunas personas
        
        \n\n Hoy en día cada vez es más habitual encontrar a personas que, por trabajo o responsabilidades personales, van al gimnasio a entrenar a primera hora de la mañana, incluso, cuando no se ha puesto ni el sol. En este sentido, surgen diversas dudas con respecto a si se debe desayunar antes o es preferible ir en ayunas para no hacer ejercicio con el desayuno aún en la boca del estómago. 
        
        \n\n **¿Qué es el entrenamiento en ayunas?**
        
        \n\n Para que exista un entrenamiento en ayunas se debe haber estado sin consumir alimentos durante, al menos, 12 horas. Tras ese periodo de tiempo, si la actividad que se realiza es intensa, puede ser perjudicial puesto que, pasadas estas horas, el entrenamiento no emplea más grasas como fuente de energía, se disminuye el rendimiento y se puede activar la gluconeogénesis (el proceso de descomposición de proteínas musculares).
        
        \n\n Además, debemos tener cuidado con los entrenamientos en ayunas, ya que se pueden producir bajadas intensas de glucosa y mareos severos.
        
        \n\n **Ahora bien, beneficios de entrenar tras 8-10 horas de ayuno:**
        
        \n\n Cuando desde la noche anterior no se han ingerido alimentos y se va a entrenar sin desayunar, es decir, se cena sobre las 21:00 h y se va a entrenar sobre las 7:00 h de la mañana, nuestro cuerpo se encuentra en el momento del día en el que sus niveles de glucógeno están más bajos, por lo que el cuerpo emplea una fuente de energía que proviene de las grasas acumuladas en los tejidos adiposos y no depende tanto de la glucosa.
        
        \n\n Además, cuando entrenamos tras unas horas sin ingesta de alimentos, se provoca un aumento en la capacidad de los depósitos de glucógeno e induce la creación de nuevas mitocondrias (es la batería que utiliza nuestro organismo, nos genera energía).
        
        \n\n **¿Para quién es recomendable entrenar sin desayunar?**
        
        \n\n Puede ser recomendable para personas que no tienen mucho tiempo durante el día o para aquellos deportistas de resistencia que tengan que prepararse pruebas de ultrafondo.
        
        \n\n **¿Quién no debería entrenar sin desayunar?**
        
        \n\n No se recomienda a aquellas personas que acaban de empezar a hacer deporte o que están habituadas a hacerlo a una hora completamente diferente, como todo, necesitamos un proceso de adaptación. Por eso, es recomendable que, si vas a comenzar a entrenar sin desayunar, lo empieces a hacer poco a poco; puedes ingerir una pequeña cantidad de comida un par de horas antes de ir a entrenar e ir reduciendo esa cantidad con el tiempo o por el contrario, puedes comenzar haciendo 15 minutos de ejercicio e ir incrementando el tiempo poco a poco pero, sobre todo, ¡con paciencia!
        
        \n\n **Sobre Martachis Fit**
        \n Martachis Fit nace con el objetivo de ofrecer información de calidad sobre vida saludable. Martachis Fit brinda una ventana hacia el mundo de la nutrición, entrenamiento deportivo y hábitos saludables a cualquier persona interesada en cambiar su rutina y mejorar su estilo de vida. 
        
        \n [https://www.instagram.com/martachis.fit/](https://www.instagram.com/martachis.fit/)
         
        \n\n MARTACHIS FIT
       
        \n\n martachis.fitness@gmail.com`, 
        title: 'ENTRENAR SIN DESAYUNAR, ¿BUENO O MALO?'})
            .then(() => console.log('Article inserted'))
            .catch(error => console.error('There was an error: ', error))
    })      