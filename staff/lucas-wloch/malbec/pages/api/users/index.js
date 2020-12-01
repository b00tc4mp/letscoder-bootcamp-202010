import dbConnect from '../../../utils/dbConnect'
import { handleError } from '../../../utils'
import { NotFoundError } from '../../../errors'
const { registerUser, retrieveUser } = require('../../../api/logic')

// const jwt = require('jsonwebtoken')

dbConnect();
const { env: { JWT_SECRET } } = process

export default async (req, res) => {
    const { method, headers: { authorization } } = req

    switch (method) {
        case 'GET':
            const token = authorization.replace('Bearer ', '')

            const { sub: userId } = jwt.verify(token, JWT_SECRET)

            try {
                retrieveUser(userId)
                    .then(user => res.status(200).json(user))
                    .catch(handleError(req, res, error))
            } catch (error) {
                handleError(req, res, error)
            }
            break;
        case 'POST':
            const { body: { fullname, email, password } } = req

            // res.status(200).json({fullname, email, password})

            try {
                registerUser(fullname, email, password)
                    .then(result => res.status(201).json({success: true}))
                    .catch(error => handleError(req, res, error))
            } catch (error) {
                return handleError(req, res, error)
            }
            break;
    }
}