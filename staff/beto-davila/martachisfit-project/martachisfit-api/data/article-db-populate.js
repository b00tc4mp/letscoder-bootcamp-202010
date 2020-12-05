require('dotenv').config()

const mongoose = require('mongoose')
// const { User } = require('../models')
const { Article } = require('../models') 


const { env: { MONGODB_URL } } = process

mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => {
        Article.create({text: `### CLAVES PARA MANTENER LA LÍNEA 
        \n\n ### DURANTE LAS FIESTAS DE NAVIDAD
        
        \n\n #### Alimentación, hidratación, moderación en el consumo de alcohol y deporte, 
        \n\n #### las claves para no perder la figura estas vacaciones
        
        \n\n Llega la Navidad y con ella las festividades y comidas en familia, de forma habitual acompañadas por los tan aclamados ‘dulces de Navidad’. Los españoles ganan de media entre 2 y 4 kilogramos durante estas semanas de fiestas y, para aquellas personas que quieren mantener la línea y no perder la figura durante las vacaciones, se trata de un período del año complicado ya que su plan de alimentación saludable puede correr ciertos riesgos. 
        
        \n\n Para evitar dejarse llevar por los tentadores turrones y mazapanes y el cálido ambiente de noches navideñas en el sofá sin actividad, se pueden llevar a cabo algunos pequeños trucos para conseguir disfrutar de las fiestas y la comida en familia sin perder la figura.
        
        \n\n **Alimentación**
        
        \n\n En el caso de ser el anfitrión de la casa y, por tanto, el responsable de la elección del menú, siempre se puede optar por elaborar recetas saludables y sabrosas. Conquistar el paladar de los invitados no será difícil si se planifica de una forma correcta, por ejemplo, se puede optar por incorporar aperitivos ligeros, como ensaladas tropicales, tartar de aguacate con langostinos o los básicos: jamón serrano, lomo embuchado y queso curado.
        
        \n\n Para el plato principal una opción perfecta es elaborar una carne magra al horno con una base de verduras y patata asada o, para los que prefieren el pescado, una lubina horneada podría ser la elección ideal. 
        
        \n\n Y, para el postre, una decisión inteligente es elaborar los turrones uno mismo con recetas caseras y saludables u optar por preparar una tarta hecha a base de productos naturales, sin azúcares ni harinas refinadas.
        
        \n\n **Control**
        
        \n\n En el caso de los invitados, a la hora de acudir a una casa que, nada más entrar ya huele a pastel recién horneado y croquetas, es importante tener control sobre uno mismo.
        
        \n\n Se puede comer cualquier alimento sin llegar a un superávit calórico al final del día, para ello tan solo se debe coger un plato y agregar la comida que se pretende ingerir. Tener toda la comida encima de la mesa con platos compartidos para el ‘picoteo’ puede resultar muy peligroso, ya que por norma general, siempre se acaba comiendo más que la ración que uno se habría servido inicialmente. 
        
        \n\n **Hidratación**
        
        \n\n El hambre se puede confundir con una falta de hidratación. Beber el agua suficiente ayudará a calmar la sensación de gula que suele generarse durante estos días, cuando la casa siempre está llena de sobras y dulces e incluso los anuncios de navidad te recuerdan lo buenísimo que está el turrón de chocolate. 
        
        \n\n **Di ‘adiós’ al alcohol**
        
        \n\n Las bebidas alcohólicas contienen un alto grado de calorías, es fácil caer en la tentación de tomarse unas cañas por la mañana antes de la comida, acompañar la carne con un par de vinos, finiquitar la sobremesa con un chupito y vuelta a empezar por la noche. Moderar el consumo de bebidas calóricas reduce de forma considerable el consumo de calorías diario.
        
        \n\n **Muévete**
        
        \n\n Que sea Navidad no quiere decir que uno deba dejar de acudir al gimnasio o a sus clases de baile. Mantenerse activo durante estas fechas es clave para contrarrestar el consumo no habitual de diversos alimentos. Además de ayudar a compensar el superávit calórico de estas fechas, ayudará a una mejor digestión, ya que los platos que se consumen en Navidad suelen estar hechos con más grasas y azúcares, lo que puede generar problemas a la hora de hacer la digestión. 
        
        \n\n Es importante cuidarse por dentro y por fuera durante todas las épocas del año pero también hay que aprender a disfrutar de las festividades y reuniones familiares sin restringir los deseos de cada uno. Ingerir cualquier alimento de una forma controlada y mantenerse activo siempre serán los factores básicos para tener unas vacaciones perfectas, ya sea en Navidad, Semana Santa o en las vacaciones de verano. 
        
        
        \n\n **Sobre Martachis Fit**
        \n Martachis Fit nace con el objetivo de ofrecer información de calidad sobre vida saludable. Martachis Fit brinda una ventana hacia el mundo de la nutrición, entrenamiento deportivo y hábitos saludables a cualquier persona interesada en cambiar su rutina y mejorar su estilo de vida. 
        
        \n [https://www.instagram.com/martachis.fit/](https://www.instagram.com/martachis.fit/)
         
         
        \n\n MARTACHIS FIT
       
        \n\n martachis.fitness@gmail.com`, 
        title: 'CLAVES PARA MANTENER LA LÍNEA DURANTE LAS FIESTAS DE NAVIDAD'})
            .then(() => console.log('Article inserted'))
            .catch(error => console.error('There was an error: ', error))
    })      