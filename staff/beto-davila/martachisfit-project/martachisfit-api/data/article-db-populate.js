require('dotenv').config()

const mongoose = require('mongoose')
// const { User } = require('../models')
const { Article } = require('../models') 


const { env: { MONGODB_URL } } = process

mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => {
        Article.create({text: `### SUPLEMENTOS DEPORTIVOS, ¿SÍ O NO?
        \n\n#### En personas que no realizan un deporte de élite, por norma general,
        \n\n#### no es necesario ningún tipo de suplementación deportiva
        \n\n#### La proteína, creatina, BCAAs y la glutamina, los suplementos más comunes
        \n\nHe recibido múltiples consultas sobre si es necesario o no tomar suplementación deportiva y cuál tomar en cada caso. Antes de empezar, he de indicar que cada persona cuenta con unas necesidades únicas y diferentes y, por tanto, no existe una respuesta general que pueda valerle a todo el mundo. No obstante, en este post vamos a tratar los temas y suplementación más comunes. 
        \n\nCada día por redes sociales, en el gimnasio o en cualquier otro lugar, se puede ver cómo las personas toman suplementación deportiva. Se trata de suplementación que se puede adquirir en tiendas online o físicas y que tienen una composición líquida, en cápsulas o en polvo, de forma general. 
        \n\n**¿Son necesarios?**
        \n\nDepende, según la actividad física que cada uno lleve a cabo se necesitarán o no, no se puede comparar una persona como yo, que voy al gimnasio de forma habitual para mejorar mi físico y tener mejores hábitos, con un atleta profesional que entrena cada día con una intensidad altísima.
        \n\nEn general, NO es necesaria una suplementación para la mayoría de las personas, ya que con la alimentación se pueden conseguir los nutrientes necesarios. Sin embargo, aquellas personas que llevan a cabo un entrenamiento de forma profesional o más avanzado, sí requieren suplementación, ya que el cuerpo emplea mucha energía para poder seguir el ritmo y tiene un mayor requerimiento de nutrientes que probablemente, no se puedan adquirir únicamente con la alimentación. 
        \n\n**¿Cuáles tomar?**
        \n\nMe reitero, depende. Según los objetivos de cada persona serán necesarios unos suplementos u otros. No se puede comparar la necesidad que tendrá un culturista profesional, con las necesidades que tiene un ciclista, ya que su objetivo y deporte son diferentes. 
        \n\nLos más habituales son:
        \n\n**Creatina:** A pesar de comentar que ningún suplemento es necesario, sin duda alguna recomendaría siempre consumir creatina (no necesaria, pero sí aconsejable). La creatina ayuda al cuerpo a mejorar la fuerza y el rendimiento.
        \n\n**Proteína:** Ya hice un post previo sobre ella, pero a modo resumen, se trata de un suplemento que ayuda a conseguir los requerimientos diarios de este macronutriente. Por supuesto, cuando el objetivo es la ganancia muscular, hace falta un entrenamiento con un volumen e intensidad adecuados y una alimentación adecuada para que esto se produzca. 
        \n\n**BCAAs:** Se trata de aminoácidos ramificados, se supone que ayudan al músculo a recuperarse y mantienen un equilibrio corporal de la glucosa, sin embargo, aún no existe ninguna evidencia científica que lo corrobore o que lo niegue. Algunos especialistas consideran que no sirven para nada. 
        \n\n**Glutamina:** Es un aminoácido que está presente en los músculos y ayuda a la recuperación después de un entrenamiento, ya que evita la degradación de proteínas.
        \n\nEstos son algunos de los más consumidos, pero también existen otros como los quemadores de grasa, multivitamínicos, Omega3, cafeína, etc. Cabe recordar que para llevar a cabo un consumo eficiente y responsable de suplementación deportiva, se ha de hacer siempre bajo la supervisión de un especialista en la materia, ya que hacerlo de forma individual puede afectar a los objetivos propuestos y suponer graves problemas para la salud. 
        \n\n**Sobre Martachis Fit**
        \n\nMartachis Fit nace con el objetivo de ofrecer información de calidad sobre vida saludable. Martachis Fit brinda una ventana hacia el mundo de la nutrición, entrenamiento deportivo y hábitos saludables a cualquier persona interesada en cambiar su rutina y mejorar su estilo de vida.
        \n\n[https://www.instagram.com/martachis.fit/](https://www.instagram.com/martachis.fit/)
        \n\nMARTACHIS FIT
        \n\nmartachis.fitness@gmail.com
        `})
            .then(() => console.log('Article inserted'))
            .catch(error => console.error('There was an error: ', error))
    })      