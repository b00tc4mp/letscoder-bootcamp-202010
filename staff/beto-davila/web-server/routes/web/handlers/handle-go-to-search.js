// const fs = require('fs')
// const path = require('path')
// const sessions = require('../../../sessions')
// const { createId } = require('../../../utils/ids')
// const { createSessionCookie } = require('./helpers/cookies')
const { searchVehicles } = require("../../../logic/indexer");

module.exports = (req, res, handleError) => {
  // req destructuring
  const {
    session: { userId, cookiesAccepted },
    query: { q } } = req;

  // if (!session.userId) --> there is no register/login yet
  if (userId) 
    if (!q)
      return res.render('search', { cookiesAccepted, results: '' }, (error, html) => {
        if (error) return handleError(error)

        res.send(html)
      })

    else searchVehicles(q, (error, vehicles) => {
        if (error) return handleError(error)

        res.render('search', { cookiesAccepted, vehicles }, (error, html) => {
            if (error) return handleError(error)

        res.send(html)
        })
    })
  else res.redirect("/login")
}

