module.exports = (req, res, next) => {
    req.setEncoding('utf8')

    let content = ''

    req.on('data', chunk => content += chunk)

    req.on('end', () => {
        let body = {}

        if (content) {
            // content => { "hola": "mundo", "year": 2020 }
            body = JSON.parse(content)
        }
        
        req.body = body

        next()
    })
}