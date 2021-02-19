const path = require('path')
const Busboy = require('busboy')
const fs = require('fs')

module.exports = (req, res) => {
    const { params: { noteId }} = req

    const busboy = new Busboy({ headers: req.headers })

    const ws = fs.createWriteStream(path.join(__dirname, `../../data/notes/${noteId}.jpg`))

    busboy.on('file', (fieldname, file, filename, encoding, mimetype) => file.pipe(ws))

    busboy.on('finish', () => res.status(204).send())

    req.pipe(busboy)
}