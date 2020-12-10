module.exports = (req,res, handleError) => {

    res.render('not-found', (error,html) => {
        if (error) return handleError(error)

        res.status(404).send(html)
    })
}