import { call } from '../utils'
//import { validateCallback } from './helpers/validations'

export default function ( query, gameconsole, budget, priceMin, priceMax, callback) {

    //validateCallback(callback)
    //poner  validations
    //https://localhost:4000/api/products?queryCompany='1423423'&queryProduct='sdjkfsd'&price='sdfgsfgdf'


    // /api/products?queryCompany=<queryCompany>&queryProduct=<queryProduct>&price=<price>&priceMin=<priceMin&priceMax=<priceMax>


    //query, gameconsole, budget, priceMin, priceMax 

    debugger
    call('GET', `http://localhost:4000/api/games/?query=${query}&gameconsole=${gameconsole}&budget=${budget}&priceMin=${priceMin}&priceMax=${priceMax}`,
        { },
        '',
        (status, response) => {
            if (status === 0)
                return callback(new Error('server error'))
            else if (status !== 200) {
                const { error } = JSON.parse(response)

                return callback(new Error(error))
            }

            const games = JSON.parse(response)
            
            callback(null, games)
        })
    
}