import call from '../utils/call'
import context from './context'
import { validateCallback, validateLevel } from './helpers/validations'

export default (function (level, callback) {
    validateLevel(level)
    validateCallback(callback)

    const { API_URL } = this

    call('GET', `${API_URL}/users/${level}/workouts/`, {},
        null,
        (status, response) => {
            if (status === 0)
                return callback(new Error('server error'))
            else if (status !== 200) {
                const { error } = JSON.parse(response)

                return callback(new Error(error))
            }

            const workout = JSON.parse(response)

            callback(null, workout)
        })
}).bind(context)