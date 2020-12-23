import { call } from '../../utils'

const {env: {API_URL}} = process

export default function (liveId, title, liveDate, duration, payment, description, callback) {


    call('POST', `${API_URL}/lives/edit`, { 'Content-type': 'application/json' }, 
    JSON.stringify({ liveId, title, liveDate, duration, payment, description }),
    (status, response) => {
        debugger
        if (status === 0)
            return callback(new Error('server error'))
        else if (status !== 204) {
            const { error } = JSON.parse(response)

            return callback(new Error(error))
        }

        callback(null)
    })
}