require('dotenv').config()
const fs = require('fs')

const mongoose = require('mongoose')
const { RecipeImg } = require('../models') 
var imageData = fs.readFileSync(__dirname + '/static/assets/images/donuts-blue.png');
const { env: { MONGODB_URL } } = process

mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => {

        // Create an RecipeImg instance
        const image = new RecipeImg

        image.img.data = imageData
        image.img.Contentype = 'image/png'
        image.title = 'DONUTS BLUE'

        image.save()
        .then(img => {
            console.log("Saved an image to MongoDB.");
        // Find the stored image in MongoDB, then save it in a folder
        RecipeImg.findById(img, (err, image) => {
            if (err) throw err;
            try{
            fs.writeFileSync(__dirname + '/static/assets/tmp/tmp-donuts-blue.png', image.data);
            }catch(error){
            console.log(error.message);
            }
        })
        .then(() => mongoose.disconnect())
        .then(() => console.log('client closed'))
        }).catch(err => {
            console.log(err);
            throw err;
        })

    }).catch(err => {
        console.log('Could not connect to MongoDB.');
        process.exit();
})
