require('dotenv').config()

const fs = require('fs')
const cloudinary = require('cloudinary').v2

const { env: { CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } } = process

cloudinary.config({
    cloud_name: CLOUDINARY_CLOUD_NAME,
    api_key: CLOUDINARY_API_KEY,
    api_secret: CLOUDINARY_API_SECRET
})

// cloudinary.uploader.upload("./donuts-blue.png", function(error, result) { console.log(result) });

cloudinary.uploader.upload("./donuts-blue.png", 
    function(error, result) {console.log(result, error)});

// const upload = cloudinary.uploader.upload_stream({
//     public_id: 'donuts-blue' // OPTION
// }, (error, result) => {
//         if (error) return console.error(error.message)

//         console.log(result)
//     })

// fs.createReadStream('donuts-blue.png')
//     .pipe(upload)