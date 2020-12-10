
module.exports = (req, res, handleError) => {

    const { session: {userId, cookiesAccepted} } = req

    if (!userId)
        res.render('login',{ feedback: '', cookiesAccepted }, (error, html) => {
            if (error) return handleError(error)

            res.send(html)
        })

    else res.redirect('/')


}