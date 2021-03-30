require('dotenv').config()

const jwt = require('jsonwebtoken')

const userId = '5fbd3f11578ed8ad70a65432'

const { env: { JWT_SECRET } } = process

const token = jwt.sign({ sub: userId }, JWT_SECRET, { expiresIn: '1h' }) // 1s

debugger

try {
    const payload = jwt.verify(token, JWT_SECRET)
    // const payload = jwt.verify(token.replace('e', 'f'), JWT_SECRET) // invalid token

    console.log('token is valid', payload)
} catch(error) {
    console.log(error)
}
