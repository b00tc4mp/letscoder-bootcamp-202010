import call from '../utils/call'
import { validateToken, validateId, validateName, validateCallback, validateNumber } from './helpers/validations'

/**
 * Adds a food item to the db
 * 
 * @example
 *      
 * 
 * @param {string} token 
 * @param {string} foodId 
 * @param {string} name 
 * @param {number} calories
 * @param {number} carbs
 *  @param {number} protein
 * @param {number} fats
 * @param {function} callback 
 */
export default function addFood(token, foodId, name, serving, calories, carbs, protein, fats, callback) {
    validateToken(token)
    if (typeof foodId !== 'undefined') validateId(foodId)
    validateName(name)
    validateNumber(serving)
    validateNumber(calories)
    validateNumber(carbs)
    validateNumber(protein)
    validateNumber(fats)
    validateCallback(callback)

    call('POST', 'http://localhost:4000/api/foods', { 
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`,
    },
        JSON.stringify({ foodId, name, serving, calories, carbs, protein, fats }),
        (status, response) => {
            if (status === 0)
                return callback(new Error('server error'))
            else if (status !== 200) {
                const { error } = JSON.parse(response)

                return callback(new Error(error))
            }

            callback(null)
        })
}