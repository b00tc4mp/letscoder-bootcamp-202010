import call from '../utils/call'
import { validateCallback, validateLevel } from './helpers/validations'

export default function (level, callback) {
    validateLevel(level)
    validateCallback(callback)

    call('GET', `http://localhost:4000/api/users/${level}/workouts/`, {},
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
}