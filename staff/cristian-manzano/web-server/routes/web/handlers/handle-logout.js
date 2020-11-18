module.exports = (req, res, handleError) => {
    const { session } = req

        session.destroy(error => {
            if (error) return handleError(error)
            
            res.render('login', { feedback: '' }, (_error, html) => {
                if (_error) return handleError(_error)

                res.send(html)
        })
    })
}