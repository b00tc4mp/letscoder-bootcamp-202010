const fs = require('fs')
const path = require('path')
const { searchVehicles } = require('../../logic')
const retrieveUser = require('../../logic/retrieve-user')

module.exports = (req, res, handleError) => {
    const { session: { userId, cookiesAccepted } , query: { q } } = req

    if(userId)
        fs.readFile(path.join(__dirname,'../../views/search.html'), 'utf8', (error, content) => {
            if (error) return handleError(error)
            
            if(!q)
            return res.send(content.replace('{cookiesAccepted}', cookiesAccepted).replace('{results}',''))
            
            searchVehicles(q, (error, vehicles) => {
                if (error) return handleError(error)
                
                retrieveUser(userId, (error , user) => {
                    if (error) return handleError(error)

                    const {likes = [] } = user

                    
                    vehicles.forEach( vehicle => vehicle.like = likes.includes(vehicle.id))
    
                    const results = `<ul>
                    ${vehicles.map(({id, name, thumbnail, like}) => `<li>
                    <a href="/vehicles/${id}">
                        <h3>${name}</h3>
                        <img src="${thumbnail}">
                        <form action="./api/likeVehicle/${id}" method="POST">
                            <button>${like ? "🤎" : "🤍"}</button>
                        </form>
                    </a>
                    </li>`)}
                    </ul>`
                    // .join('\n')
    
                    
                    res.send(content.replace('{cookiesAccepted}', cookiesAccepted).replace('{results}', results))
                })


            })
        
        })

    else res.redirect('/login')

}
