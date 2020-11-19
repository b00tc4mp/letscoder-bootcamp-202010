import { call } from '../utils'

export default function (text, tags, owner, visibility, callback) {
     // if (typeof id !== 'undefined') validateId(id)
    // validateText(text)
    // valitateTags(tags)
    // validateId(owner)
    // validateVisibility(visibility)
    // validateCallback(callback)

    call('POST', 'http://localhost:4000/api/notes', { 'Content-type': 'application/json' },
        JSON.stringify({ text, tags, owner, visibility }),
        (status, response) => {
            if (status === 0)
                return callback(new Error('server error'))
            else if (status !== 201) {
                const { error } = JSON.parse(response)

                return callback(new Error(error))
            }

            callback(null)
        })
}