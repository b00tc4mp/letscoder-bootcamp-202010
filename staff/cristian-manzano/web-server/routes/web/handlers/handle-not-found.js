module.exports = (req, res, handleError) => {
    res.render('not-found', { feedback: 'page not found' }, (_error, html) => {
        if (_error) return handleError(_error)

        res.status(404).send(html)
    })
} 