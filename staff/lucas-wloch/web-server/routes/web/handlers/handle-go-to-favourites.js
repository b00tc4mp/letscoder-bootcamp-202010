const { retrieveVehicle, retrieveUser } = require('../../../logic')

module.exports = (req, res, handleError) => {
    const { session: { userId, cookiesAccepted } } = req
    var results = []
    if (userId) {
        retrieveUser(userId, (error, user) => {
            if (error) return handleError(error)

            const { likes = [] } = user

            // debugger
            if (likes.length === 0)
                return res.render('favourites', { cookiesAccepted, results: '' }, (error, html) => {
                    if (error) return handleError(error)

                    res.send(html)
                })

            likes.forEach(id =>
                retrieveVehicle(id, (error, vehicle) => {
                    if (error) return handleError(error)
                    // debugger

                    vehicle.like = likes.includes(id)

                    results.push(vehicle)

                    if (results.length === likes.length)
                        res.render('favourites', { cookiesAccepted, results }, (error, html) => {
                            if (error) return handleError(error)

                            res.send(html)
                        })
                })
            )
            // debugger
        })
    } else res.redirect('/login')

}
