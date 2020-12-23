import { call } from '../../utils'
import { validateFullname, validateTags, validateCallback, validateCity, validateArtistName, validateDescription, validateEmail } from './helpers/validations'

const {env: {API_URL}} = process

export default function (email, fullname, artistName, city, tags, youtubeLink, bandcampLink, spotifyLink, description, callback) {

    validateEmail(email)
    validateFullname(fullname)
    validateArtistName(artistName)
    validateCity(city)
    validateDescription(description)
    // validateTags(tags)
    validateCallback(callback)


    call('POST', `${API_URL}/users/edit`, { 'Content-type': 'application/json' }, 
    JSON.stringify({ email, fullname, artistName, city, tags, youtubeLink, bandcampLink, spotifyLink, description }),
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