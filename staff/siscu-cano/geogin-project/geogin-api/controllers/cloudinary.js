require('dotenv').config()

const cloudinary = require('cloudinary').v2
const {
  env: { CLOUD_NAME, API_KEY, API_SECRET }
} = process

// cloudinary configuration
cloudinary.config({
  cloud_name: CLOUD_NAME,
  api_key: API_KEY,
  api_secret: API_SECRET
})

exports.uploads = file => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(
      file,
      { resource_type: 'image', folder: 'pdf' },
      (err, url) => {
        if (err) return reject(err)
        return resolve(url)
      }
    )
  })
}
