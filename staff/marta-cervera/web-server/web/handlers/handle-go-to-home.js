const fs = require('fs')
const path = require('path')
const retrieveUser = require('../../logic/retrieve-user')
const sessions = require('../../sessions')

//const session = require('./session')

module.exports = ( req, res) => {

    const { cookies : { 'session-id': sessionId } } = req

    const session = sessions[sessionId]

    if(session && session.userId)
        retrieveUser(session.userId, (error, user) => {
            if (error)
                return fs.readFile(path.join(__dirname, '../../views/error.html'), 'utf8', (__error, content) =>{
                    if(__error) return res.send(`sorry, there was an error :( ERROR: ${__error.message}`)

                    res.send(content.replace('{message}', error.message))
        })

        fs.readFile(path.join(__dirname,'../../views/home.html'), 'utf8', (error, content)=>{
            if(error) return res.send(`sorry, there was an error :( ERROR : ${error.message}`)

            res.send(content.replace('{fullname}', user.fullname))
        })
    })
    else res.redirect('/login')
}