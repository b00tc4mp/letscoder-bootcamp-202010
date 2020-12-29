const { saveQuest } = require('../../../logic')
const jwt = require('jsonwebtoken')

const {
  env: { JWT_SECRET }
} = process

module.exports = (req, res, handleError) => {
  const {
    headers: { authorization },
    body: {
      questId,
      title,
      coverImg,
      description,
      homeLocation,
      endLocation,
      time,
      modePrivate,
      kidsOk,
      evaluations,
      tests
    }
  } = req

  const token = authorization ? authorization.replace('Bearer ', '') : ''

  try {
    const { sub: ownerId } = jwt.verify(token, JWT_SECRET)

    saveQuest(
      ownerId,
      questId,
      title,
      coverImg,
      description,
      homeLocation,
      endLocation,
      time,
      modePrivate,
      kidsOk,
      evaluations,
      tests
    )
      .then(questId => res.status(200).send({ questId }))
      .catch(handleError)
  } catch (error) {
    handleError(error)
  }
}
