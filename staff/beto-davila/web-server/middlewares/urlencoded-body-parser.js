/* Every chunk has to be properly converted (decoded) before passing it */

module.exports = (req, res, next) => {
    req.setEncoding('utf8') // sets the character encoding for data read from the stream

    let content = ''

    req.on('data', chunk => content += chunk) // Readable stream emits 'data' events once a listener is added

    /* The on method binds an event to a object.
      Way to express the intent if there is something happening (data sent), 
      then execute the callback. (Event-driven). */

    // The 'end' event says that the whole content has been received. (on... end  = cuando... acaba)
    req.on('end', () => {
        const body = {}

        if (content) {
            // content => email=manuelbarzi%40gmail.com&password=123123123&c=1&d=2
            //fullname = fullname.replaceAll('+', ' ') --> WARN!! not supported in NodeJS yet (but in the browsers it is :( ))
            const keyValues = content.split('&')

            // object value iteration. Each keyValue is split into 'key' and 'value' according to '=' sign and stored in constants.
            for (const keyValue of keyValues) {
                const [key, value] = keyValue.split('=')

                // store each decoded value
                body[key] = decodeURIComponent(value.split('+').join(' ')) // decode URI. (i.e.: dagoman19%40gmail.com === dagoman19@gmail.com)
            }
        }
        // req.body contains key-value pairs of data submitted in the request body. By default, it is undefined, and is populated when you use body-parsing middleware
        req.body = body
        // called to continue with handleRegister for instance. We confirm with this that the process ends before starting next one.
        next()
    })
}