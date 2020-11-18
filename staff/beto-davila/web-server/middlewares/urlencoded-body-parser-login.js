module.exports = (req, res, next) => {
    req.setEncoding('utf8')

    let content = ''

    req.on('data', chunk => content += chunk)

    req.on('end', () => {
        // email=manuelbarzi%40gmail.com&password=123123123

        const parts = content.split('&')

        let [, email] = parts[0].split('=')
        let [, password] = parts[1].split('=')

        email = decodeURIComponent(email)

        password = decodeURIComponent(password)

        const body = { email, password }

        req.body = body

        next()
    })
}