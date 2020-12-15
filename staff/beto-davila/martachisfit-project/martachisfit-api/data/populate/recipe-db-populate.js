require('dotenv').config()

const { models: { Recipe }, mongoose } = require('martachisfit-data')

const { env: { MONGODB_URL } } = process

mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => {
        Recipe.create({
            text: `¿Fanátic@s de la crema de cacahuete? Esta receta es para vosotr@s:

            \n\n Vais a flipar porque está BRUTAL y la podéis hacer sin horno
            
            \n\n **INGREDIENTES BASE:**
            \n\n 🥜 100gr de harina de avena tamizada
            \n\n 🥜 35ml de leche (la que uséis)
            \n\n 🥜 20gr de aceite de oliva
            
            \n\n **INGREDIENTES RELLENO:**
            \n\n 🥜 6 yogures naturales edulcorados (o queso fresco batido)
            \n\n 🥜 10 láminas de gelatina
            \n\n 🥜 Cacao puro desgrasado (al gusto)
            \n\n 🥜 2 cucharadas de mantequilla de cacahuete (o la que más os guste),
            \n\n 🥜 Stevia (opcional)
            \n\n 🥜 100ml de leche
            
            \n\n **ELABORACIÓN:**
            
            \n\n Si la vamos a hacer en horno, vamos precalentándolo a 180°.
            
            \n\n En un bowl ponemos la harina ya tamizada, y en otro, mezclaremos la leche y el aceite
            
            \n\n Poco a poco integramos ambas partes hasta conseguir una textura moldeable (tipo plastilina), que pondremos en la base de nuestro molde para tartas.
            
            \n\n Lo metemos al horno 10-15 minutos (o al microondas), hasta que se quede crujiente.
            
            \n\n Mientras se hace, preparamos la primera capa, ponemos a hidratar 5 láminas de gelatina, y batimos por otro lado 3 yogures y el cacao desgrasado.
            
            \n\n Calentamos 50ml leche y derretimos en ella las láminas de gelatina. Cuando lo tengamos, batimos todo bien y ponemos sobre nuestra base de galleta.
            
            \n\n Lo metemos a la nevera durante 1 hora y después, hacemos la otra capa: Volvemos a hidratar las gelatinas y las derretimos en los otro 50ml de leche.
            
            \n\n En otro bowl mezclamos los otros 3 yogures con la crema de cacahuete y cuando esté todo, batimos las dos partes bien.
            
            \n\n Sobre nuestra capa de chocolate (que ya deberá estar cuajada), hacemos unos pequeños surcos con el tenedor (para se integren mejor las capas) y vertemos nuestra masa de cacahuete y gelatina encima con cuidado.
            
            \n\n Metemos a la nevera durante 3 horitas y cuando la saquemos, podemos decorar al gusto.
            
            \n\n ¿Te animas a darte el gusto?`
            ,
            title: '### TARTA CHOCOHUETE',
            urlPathImg: 'https://res.cloudinary.com/beto-cloud-name/image/upload/v1607405459/tarta-chocolates_bs4km4.jpg'
        })
            .then(() => console.log('Recipe inserted'))
            .catch(error => console.error('There was an error: ', error))
    })      