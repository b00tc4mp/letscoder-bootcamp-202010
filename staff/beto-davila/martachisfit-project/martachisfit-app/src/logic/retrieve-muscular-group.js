import call from '../utils/call'
import { validateCallback, validateMuscularGroup } from './helpers/validations'
import context from './context'

export default (function (group, callback) {
    validateMuscularGroup(group)
    validateCallback(callback)

    const { API_URL } = this

    call('GET', `${API_URL}/movements/${group}`, {},
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
}).bind(context)