const { validateId, validateCallback } = require('./helpers/validations')
const path = require ('path')
const  fs  = require('fs')


module.exports = (userId, callback) => {
  validateId(userId)
  validateCallback(callback)

  const notesPath = path.join(__dirname, `../data/notes`)
  
  const notes = []

  fs.readdir(notesPath, (error, files) =>{
      if(error) return callback (error)

      (function readNote(files, index = 0){
    
        if(index < files.length) {
            const file = files[index]

            fs.readFile(path.join(notesPath, file), 'utf8', (error,json) => {
                if (error) return callback(error)

                const note = JSON.parse(json)

                if (note.owner === userId) 
                 
                  notes.push(note)
                  readNote(files, ++index)
                })
            } else callback(null, notes)
        })(files)
    })


}