const fs = require('fs')
const path = require('path')


module.exports = (req, res, handleError) => {
    const { session, params: { vehicleId }, headers: { referer }, url } = req

    const { userId } = session

    if (!userId) return handleError(406, 'could not like :(')

    var id = url.split('/')[3] // /api/likeVehicle//id

    debugger
    // req.headers.referer
    // "http://localhost:3000/search?q=black"

    const previus = referer.replace('http://localhost:3000', '')

    const file = path.join(__dirname, `../../../data/users/${userId}.json`)


    fs.access(file, fs.F_OK, error => {
        if (error) return handleError(500, `could not access file`)
        
        fs.readFile(file, 'utf8', (error, json) => {
            if (error) return handleError(500, `could nor read file`)
    
            const user = JSON.parse(json)


            const { likes = [] } = user
        
            const index = likes.indexOf(vehicleId)
            if (index > -1) likes.splice(index, 1)
            else likes.push(vehicleId)
        
            user.likes = likes
        
            const _json = JSON.stringify(user)
        
            try {
                fs.writeFileSync(file, _json)
                res.redirect(previus)
                
            } catch (error) {
                if (error) return handleError(500, `could not write file`)
            }
        })
    })


}