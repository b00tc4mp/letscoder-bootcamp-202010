require('dotenv').config()

const { models: { Article }, mongoose } = require('martachisfit-data')


const { env: { MONGODB_URL } } = process

mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => {
        Article.create({
            text: `#### No es tan sencillo sobreentrenar como algunos creen, sin embargo, es un factor a tener en cuenta para aquellos que no creen en el descanso y el "más es mejor" es su mantra
            \n\n El sobreentrenamiento se ocasiona en aquellos deportistas (generalmente de élite) que entrenan con una intensidad y frecuencia más alta que la capacidad que tiene el cuerpo de recuperarse, es decir, se produce una sobrecarga.

            \n\n Muchos atletas caen en este error pensando que por entrenar más, conseguirán mejores resultados;y dejan a un lado el descanso y la recuperación, dos factores clave para que un entrenamiento sea eficiente

            \n\n **¿Es fácil caer en este síndrome?**

            \n\n Por norma general, NO. 

            \n\n Para que se produzca el sobreentrenamiento se debe haber abusado del ejercicio durante un largo período de tiempo, de manera que el cuerpo haya acumulado un estrés y fatiga constante durante varias semanas o meses, no es tan sencillo como haber hecho 4 repeticiones de más en una serie de sentadillas.

            \n\n Además, para que exista un sobreentrenamiento, suelen existir factores externos (competiciones con demasiada frecuencia, preocupaciones personales, estrés, nutrición mal gestionada, etc.).


            \n\n Por lo tanto, una persona que entrena con una frecuencia regular en el gimnasio, sale a correr, hace bicicleta o juega al pádel, por ejemplo, para mantenerse activo y saludable, no conseguirá de una forma sencilla llegar a padecer un síndrome de sobreentrenamiento. 


            \n\n Muchas veces se confunde sobreentrenamiento con cansancio físico, estrés u otros problemas. 

            \n\n **¿Qué provoca?**

            \n\n Cuando se produce un sobreentrenamiento en un atleta se alteran los procesos metabólicos y se incrementa el daño muscular, lo que imposibilita al cuerpo a recuperarse de manera adecuada.

            \n\n Se pueden experimentar síntomas físicos y psíquicos, empezamos por los físicos:

            \n\n - Sensación de cansancio y fatiga
            \n\n - Dolor y malestar en las articulaciones y músculos
            \n\n - Un menor rendimiento a la hora de entrenar
            \n\n - Dificultad para dormir
            \n\n - Disminución de las defensas
            \n\n - Lesiones físicas

            \n\n Y ahora, los psicológicos:

            \n\n - Jaqueca
            \n\n - Desmotivación por el deporte que se practica
            \n\n - Tristeza o depresión
            \n\n - Obsesión excesiva por hacer deporte

            \n\n **¿Cómo evitarlo?**

            \n\n Manteniendo una rutina de entrenamiento eficiente que cuente con tiempos de descanso y recuperación óptimos.

            \n\n Llevar una alimentación saludable, nutrir nuestro cuerpo con las necesidades que requiere será de vital importancia para compaginarlo con una rutina de entrenamiento adecuada. 

            \n\n Hidratación: cada uno tenemos unas necesidades y tenemos que suplirlas, ya que la hidratación juega un papel importantísimo en la recuperación.
        
        \n\n **Sobre Martachis Fit**
        \n Martachis Fit nace con el objetivo de ofrecer información de calidad sobre vida saludable. Martachis Fit brinda una ventana hacia el mundo de la nutrición, entrenamiento deportivo y hábitos saludables a cualquier persona interesada en cambiar su rutina y mejorar su estilo de vida. 
        
        \n [https://www.instagram.com/martachis.fit/](https://www.instagram.com/martachis.fit/)
         
        \n\n MARTACHIS FIT
       
        \n\n martachis.fitness@gmail.com`,
            title: 'SOBREENTRENAMIENTO',
            urlPathImg: "https://res.cloudinary.com/beto-cloud-name/image/upload/v1607970554/sobreentrenamiento_pcwrmu.jpg"
        })
            .then(() => console.log('Article inserted'))
            .catch(error => console.error('There was an error: ', error))
    })      