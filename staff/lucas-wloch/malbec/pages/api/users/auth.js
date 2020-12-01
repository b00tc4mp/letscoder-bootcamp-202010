import { handleError, dbConnect } from '../../../utils'

const { authenticateUser } = require('../../../api/logic')
const jwt = require('jsonwebtoken')

const { env: { JWT_SECRET, JWT_EXP } } = process

dbConnect();

export default async (req, res) => {
    const { method } = req

    switch (method) {
        case 'POST':
            const { body: { email, password } } = req

            try {
                authenticateUser(email, password)
                    .then(userId => {
                        const token = jwt.sign({ sub: userId }, JWT_SECRET, { expiresIn: JWT_EXP })

                        res.status(200).json({ token })
                    })
                    .catch(error => handleError(req, res, error))
            } catch (error) {
                return handleError(req, res, error)
            }
            break;
        default: res.status(400).json()
    }
}