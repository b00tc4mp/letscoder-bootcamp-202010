module.exports = (req, res, next) => {
    req.setEncoding('utf8')

    let content = ''

    req.on('data', chunk => content += chunk)

    req.on('end', () => {
        const body = {}

        // content => email=manuelbarzi%40gmail.com&password=123123123&c=1&d=2
        const keyValues = content.split('&')

        for (const keyValue of keyValues) {
            const [key, value] = keyValue.split('=')

            body[key] = decodeURIComponent(value.split('+').join(' '))
        }

        req.body = body

        next()
    })
}