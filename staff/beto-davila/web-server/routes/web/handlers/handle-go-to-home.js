// const fs = require('fs')
// const path = require('path')
const { retrieveUser } = require('../../../logic/indexer')
// const sessions = require('../../../sessions')

module.exports = (req, res, handleError) => {
    const { session: { userId } }  = req

    if (userId)
        //retrieveUser(session.userId, (error, user) => {
        retrieveUser(userId, (error, user) => {
            if (error) return handleError(error)

            const { fullname } = user
            res.render('home', {fullname}, (error, html) => {
                if (error) return handleError(error)

                res.send(html)
            })
            // fs.readFile(path.join(__dirname, '../../views/home.html'), 'utf8', (error, content) => {
        })
    else res.redirect('/login')
}
