module.exports = (req, res, next) => {
    req.setEncoding('utf8')

    const { headers: { 'content-type': contentType } } = req

    if (contentType === 'application/json') {
        let content = ''

        req.on('data', chunk => content += chunk)

        req.on('end', () => {
            let body = {}

            if (content) {

                body = JSON.parse(content)
            }

            req.body = body

            next()
        })
    } else next()
}