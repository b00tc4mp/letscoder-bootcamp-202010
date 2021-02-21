import { call } from '../utils'
import { validateCallback } from './helpers/validations'
import context from './context'

/**
 * Retrieves pets that match a query criteria
 * 
 * @param {String} token use to find the shelterId
 * @param {string} queryShelter query to find information about the shelter, with this criteria you can search by name, email and description
 * @param {String} city shelter´s city
 * @param {string} queryPet query to find information about the pet, with this criteria you can search by name and description
 * @param {String} species shelter´s species
 * @param {String} breed shelter´s breed
 * 
 * @throws {Error} on server error
 * @throws {Error} if status is not 200
 * 
 * @returns {Array} Pets representing the pets matching the queries criteria. Otherwise, empty array.
 * 
 */

export default (function (token, queryShelter, city, queryPet, species, breed, callback) {
    
    validateCallback(callback)
    //poner  validations

    const { API_URL } =  this

    const queryParams = {}

    if (queryShelter) queryParams.queryShelter = queryShelter
    if (city) queryParams.city = city
    if (queryPet) queryParams.queryPet = queryPet
    if (species) queryParams.species = species
    if (breed) queryParams.breed = breed

    const queryString = Object.keys(queryParams).map(key => `${key}=${queryParams[key]}`).join('&') 

    call('GET', `${API_URL}/pets/?${queryString}`, 
    {Authorization: `Bearer ${token}` },
    '',
        (status, response) => {
            if (status === 0)
                return callback(new Error('server error'))
            else if (status !== 200) {
                const { error } = JSON.parse(response)

                return callback(new Error(error))
            }

            const pets = JSON.parse(response)

            callback(null, pets)
        })
}).bind(context)

