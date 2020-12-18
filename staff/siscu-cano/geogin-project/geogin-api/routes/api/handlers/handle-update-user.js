const { retrieveUser } = require('../../../logic')
const jwt = require('jsonwebtoken')

const {
  env: { JWT_SECRET }
} = process

module.exports = (req, res, handleError) => {
  const {
    headers: { authorization }
  } = req

  const token = authorization ? authorization.replace('Bearer ', '') : ''

  try {
    const { sub: userId } = jwt.verify(token, JWT_SECRET)

    updateUser(userId)
      .then(() => res.status(200).json({ message: 'user updated' }))
      .catch(handleError)
  } catch (error) {
    handleError(error)
  }
}
