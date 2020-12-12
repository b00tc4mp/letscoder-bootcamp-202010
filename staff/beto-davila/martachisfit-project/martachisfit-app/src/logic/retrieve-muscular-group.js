import call from '../utils/call'
import { validateCallback, validateMuscularGroup } from './helpers/validations'

export default function (group, callback) {
    validateMuscularGroup(group)
    validateCallback(callback)

    call('GET', `http://localhost:4000/api/movements/${group}`, {},
        null,
        (status, response) => {
            if (status === 0)
                return callback(new Error('server error'))
            else if (status !== 200) {
                const { error } = JSON.parse(response)

                return callback(new Error(error))
            }

            const movements = JSON.parse(response)

            callback(null, movements)
        })
}