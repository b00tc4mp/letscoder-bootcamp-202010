const { searchVehicles } = require('../../../logic')

module.exports = (req, res, handleError) => {
    const { query: { q }, session: { userId, cookiesAccepted } } = req

    if (!userId) {
        if (q)
            searchVehicles(q, (error, vehicles) => {
                if (error) return handleError(error)

                res.render('search', { cookiesAccepted, vehicles }, (error, html) => {
                    if (error) return handleError(error)

                    res.send(html)
                })
            })
        else
            res.render('search', { cookiesAccepted }, (error, html) => {
                if (error) return handleError(error)

                res.send(html)
            })
    } else res.redirect('/')
}