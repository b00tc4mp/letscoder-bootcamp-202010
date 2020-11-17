const { searchVehicles, retrieveUser } = require('../../../logic')

module.exports = (req, res, handleError) => {
    const { session: { userId, cookiesAccepted }, query: { q } } = req

    if (userId){

        if (!q)
            return res.render('search', { cookiesAccepted, results: '' }, (error, html) => {
                if (error) return handleError(error)

                res.send(html)
            })

        searchVehicles(q, (error, vehicles) => {
            if (error) return handleError(error)

            retrieveUser(userId, (error, user) => {
                if (error) return handleError(error)

                const { likes = [] } = user

                
                vehicles.forEach(vehicle => vehicle.like = likes.includes(vehicle.id))


                res.render('search', { cookiesAccepted, results: vehicles }, (error, html) => {
                    if (error) return handleError(error)

                res.send(html)
                })
            })


        })
    } else res.redirect('/login')

}
