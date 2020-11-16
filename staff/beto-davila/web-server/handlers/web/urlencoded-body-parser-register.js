module.exports = (req, res, next) => {
    req.setEncoding('utf8')

    let content = ''

    req.on('data', chunk => content += chunk)

    req.on('end', () => {
        // fullname=gato+perro&email=gatoperro%40mail.com&password=123123123

        const parts = content.split('&')

        let [, fullname] = parts[0].split('=')
        let [, email] = parts[1].split('=')
        let [, password] = parts[2].split('=')

        fullname = fullname.split('+').join(' ')

        email = decodeURIComponent(email)

        password = decodeURIComponent(password)

        const body = { fullname, email, password }

        req.body = body

        next()
    })
}
