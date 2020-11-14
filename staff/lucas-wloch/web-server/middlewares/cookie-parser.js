module.exports = (req, res, next) => {
    const cookie = req.get('cookie')

    const cookies = {}

    if (cookie) {
        const keyValues = cookie.split(';')
        
        for(const keyValue of keyValues) {
            const [key, value] = keyValue.split('=')

            cookies[key.trim()] = value
        }
    }

    req.cookies = cookies
   

    next()
}


// res.setHeader('set-cookie','hola=holaa')
    // res.setHeader('set-cookie','chao=chaoo')
    // console.log(typeof req.headers.cookie)
    // console.log(req.headers.cookie)
    // console.log(req.get('cookie'))