const { registerUser } = require('../../../logic')


module.exports = (req, res, handleError) => {

    const {body: { fullname, email, password, repassword }, session: {cookiesAccepted} } = req

    registerUser(fullname, email, password, repassword, (error, id) => {
        if (error)
            return res.render('register', { cookiesAccepted, feedback: error.message }, (error, content) => {
                if (error) return handleError(error)
    
                res.send(content)
            })
            return res.render('register-confirm', { cookiesAccepted, feedback: '' }, (error, content) => {
                if (error) return handleError(error)
    
                res.send(content)
            })
    })
}