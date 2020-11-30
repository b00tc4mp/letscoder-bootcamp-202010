import {dbConnect} from '../../../utils'
import { handleError } from '../../../api/utils'
const { registerUser, retrieveUser } = require('../../../api/logic')

const jwt = require('jsonwebtoken')

dbConnect();
const { env: { JWT_SECRET } } = process

export default async (req, res) => {
    const { method, headers: { authorization } } = req

    switch(method){
        case 'GET':
            const token = authorization.replace('Bearer ', '')
            
            const { sub: userId } = jwt.verify(token, JWT_SECRET)

            try {
                retrieveUser(userId)
                    .then(user => res.status(200).json(user))
                    .catch(handleError)
            } catch (error) {
                handleError(error)
            }
            break;
        case 'POST':
            const { body: { fullname, email, password } } = req
            try {
                registerUser(fullname, email, password)
                    .then(result => res.status(201).send())
                    .catch(handleError)
            } catch (error) {
                handleError(error)
            }
            break;
    }
}