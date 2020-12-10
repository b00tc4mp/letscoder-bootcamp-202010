const fs = require('fs')
const path = require('path')

//module.exports = class {
class Session {
    constructor(id){
        this.id = id
    }
    
    exists(callback){
        const filePath = path.join(__dirname, `../sessions/${this.id}.json`)
        
        fs.access(filePath, fs.F_OK, error => callback(!error))
    }
    
    load(callback){
        const filePath = path.join(__dirname, `../sessions/${this.id}.json`)
        
        fs.readFile(filePath,'utf8',(error, json) => {
            if (error) return callback(error)
            
            const session = JSON.parse(json)
            
            for (const key in session)
            this[key] = session[key]
            
            callback(null)
            
        })
    }
    
    save(callback){
        const filePath = path.join(__dirname, `../sessions/${this.id}.json`)
        
        const json = JSON.stringify(this)
        
        fs.writeFile(filePath, json, error => {
            if(error) return callback(error)
            
            callback(null)
        })
    }
    
    destroy(callback){
        const filePath = path.join(__dirname, `../sessions/${this.id}.json`)
        
        fs.unlink(filePath,error => {
            if(error) return callback(error)
            
            callback(null)
        })
    }
}

module.exports = Session