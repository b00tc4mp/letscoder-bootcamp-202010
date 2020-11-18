const registerUser = require('../../../logic/register-user')

module.exports = (req, res, handleError) => {
    const { body: { fullname, email, password } } = req

    registerUser(fullname, email, password, error => {
        if (error) {
        console.log(error)
        return res.render('register', { feedback: error.message }, (_error, html) => {
            if (_error) return handleError(_error)

            res.send(html)
        }) 
    } 
        res.render('register-confirm', { feedback: 'Ok, user registered'}, (_error, html) => {
            if (_error) return handleError(_error)

            res.send(html)
        })
    })
}