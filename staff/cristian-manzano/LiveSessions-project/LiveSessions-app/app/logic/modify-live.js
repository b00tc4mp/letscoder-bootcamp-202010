import { call } from '../../utils'

export default function (liveId, title, liveDate, duration, payment, description, callback) {


    call('POST', 'http://192.168.0.21:4000/api/lives/edit', { 'Content-type': 'application/json' }, 
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