require('dotenv').config()

const mongoose = require('mongoose')
const { Article } = require('../../models') 


const { env: { MONGODB_URL } } = process

mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => {
        Article.create({text: `#### Si alguna vez te has dicho “Como súper poco y no adelgazo”
        \n #### Este post es para ti
        
        \n\n Cuando una persona lleva a cabo un plan de alimentación específico ligado a un objetivo, resulta muy frustrante no conseguir las metas que uno se propone. En el caso de la pérdida de peso se suelen cometer diversos errores de forma inconsciente que provocan que las medidas corporales no disminuyan con el paso de las semanas. 
        
        \n\n Cuando se produce este estancamiento es necesario repasar algunos aspectos del día a día y de los hábitos de cada uno para identificar dónde está el fallo y ponerle solución. En la siguiente lista, encontrarás 7 razones por las que tu dieta podría no estar funcionando como esperabas:
        
        \n\n **Tener una ingesta de calorías demasiado baja**
        
        \n\n Has leído bien, sí. Cuando se reduce mucho el consumo calórico esperando obtener resultados rápidos y milagrosos, el organismo también disminuye su gasto calórico. Es decir, si no se le proporciona alimentación suficiente al cuerpo, éste se ralentiza y deja de quemar grasa. El cuerpo es muy inteligente y, aunque quisiéramos, ¡no podemos engañarle!
        
        \n\n **Abusar de la “comida saludable”**
        
        \n\n Nueces, aguacate, queso, jamón serrano o avena, entre otros muchos alimentos, son muy saludables, pero siempre en su justa medida.
        
        \n\n Que un alimento sea saludable, no quiere decir que no tenga calorías en su composición, por lo que siempre se debe tener en cuenta que los alimentos saludables, como todo en la vida, se deben consumir con moderación, ya que por el contrario, se producirá un superávit calórico que provocará el incremento de peso.
        
        \n\n **No ejercitarse físicamente**
        
        \n\n Llevar una alimentación saludable es un aspecto básico cuando se quiere conseguir un objetivo, pero si el estilo de vida es sedentario, la balanza jamás estará equilibrada.
        
        \n\n Es de vital importancia ejercitar el cuerpo, ya sea ir al gimnasio, hacer spinning, correr, ir a jugar al paddle o al fútbol o cualquier otra actividad, porque si no se mueve la musculatura del cuerpo, el metabolismo se vuelve cada vez más lento y deja de quemar grasa. 
        
        
        \n\n **Eliminar algún macronutriente de la dieta**
        
        \n\n Proteínas, grasas y carbohidratos; los tres macronutrientes esenciales para llevar a cabo una alimentación saludable. Eliminar por completo de la dieta los carbohidratos o las grasas saludables porque “engordan más” es un error muy común y muy grave; ya que este déficit puede conllevar carencias nutricionales y alterar el metabolismo. 
        
        \n\n **Seguir la dieta de ‘Pepito Grillo’ y ‘Fulanito’**
        
        \n\n Cada persona tiene unos requerimientos nutricionales, seguir una dieta al azar que se ha encontrado por Internet o la dieta que han recomendado a un conocido no es productivo, ya que no estará adaptada a las necesidades calóricas de uno mismo y, por tanto, no dará resultados.
        
        \n\n **Cortisol** 
        
        \n\n Es la "hormona del estrés", se libera a primera hora de la mañana. Cuando se mantiene un estado de nervios, preocupaciones o se realiza una actividad física excesiva, esta hormona permanece elevada durante un periodo de tiempo superior al deseable. Al permanecer con el cortisol alto durante varios días, el metabolismo se vuelve catabólico y se paralizan diversas funciones, lo que puede ocasionar un exceso de grasa, ya que el cuerpo supone que es un mecanismo de supervivencia. Para evitar este efecto, se debe tener una buena higiene del sueño, hacer meditación y cuidarse, tanto por dentro como por fuera. 
        
        \n\n **Llevar demasiado tiempo “a dieta”**
        
        \n\n El organismo es inteligente y, cuando alimentamos nuestro cuerpo con una ingesta baja de calorías, se acostumbra y no lo considera algo no habitual. Eso se traduce en que aprende a vivir y mantenerse con lo que se le ofrece. Cuando esto ocurre es recomendable llevar a cabo un ciclado de calorías, se trata solo de ondular las calorías durante la semana, manteniendo un déficit calórico (algunos días se ingieren más calorías y otros menos), así el cuerpo nunca llega a acostumbrarse al mismo consumo de calorías.
        
        \n\n En resumen, para conseguir objetivos físicos, se deben tener en cuenta todos los parámetros que influyen a la hora de alcanzar las metas propuestas. Para llevar a cabo un plan de alimentación equilibrado, es importante contar siempre con el apoyo de un especialista en la materia que ofrezca las herramientas y conocimientos adecuados para establecer un hábito saludable.
        
        
        \n\n **Sobre Martachis Fit**
        \n Martachis Fit nace con el objetivo de ofrecer información de calidad sobre vida saludable. Martachis Fit brinda una ventana hacia el mundo de la nutrición, entrenamiento deportivo y hábitos saludables a cualquier persona interesada en cambiar su rutina y mejorar su estilo de vida. 
        
        \n [https://www.instagram.com/martachis.fit/](https://www.instagram.com/martachis.fit/)
         
        \n\n MARTACHIS FIT
       
        \n\n martachis.fitness@gmail.com`, 
        title: '7 RAZONES POR LAS QUE TU DIETA NO FUNCIONA',
        urlPathImg: "https://res.cloudinary.com/beto-cloud-name/image/upload/v1607682993/dieta-funciona_nlilkq.jpg"})
            .then(() => console.log('Article inserted'))
            .catch(error => console.error('There was an error: ', error))
    })      