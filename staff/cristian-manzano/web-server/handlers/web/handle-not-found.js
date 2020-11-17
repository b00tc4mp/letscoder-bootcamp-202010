module.exports = (req, res, handleError) => {
    res.render('error', { feedback: error.message }, (error, html) => {
        if (error) return handleError(error)

        res.send(html)
    })

        res.status(404).send(html)
} 