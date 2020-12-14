module.exports = {
    validateEmail(email) {
        if (typeof email !== 'string') throw new TypeError(`${email} is not an e-mail`)

        if (!email.trim().length) throw new Error('e-mail is empty or blank')

        if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) throw new Error('invalid e-mail')
    },

    validatePassword(password) {
        if (typeof password !== 'string') throw new TypeError(password + ' is not a password')

        if (!password.trim().length) throw new Error('password is empty or blank')
    },

    validateCallback(callback) {
        if (typeof callback !== 'function') throw new TypeError(callback + ' is not a callback')
    },

    validateName(name) {
        if (typeof name !== 'string') throw new TypeError(name + ' is not a name')

        if (!name.trim().length) throw new Error('name is empty or blank')
    },

    validateId(id) {
        if (typeof id !== 'string') throw new TypeError(id + ' is not a id')

        if (!id.trim().length) throw new Error('id is empty or blank')

        if (id.length !== 24) throw new Error('id length is not 24')
    },

    validateToken(token) {
        if (typeof token !== 'string') throw new TypeError(token + ' is not a token')

        if (!token.trim().length) throw new Error('token is empty or blank')
    },

    validateText(text) {
        if (typeof text !== 'string') throw new TypeError(text + ' is not a text')

        if (!text.trim().length) throw new Error('text is empty or blank')
    },
    validateDescription(description) {
        if (typeof description !== 'string') throw new TypeError(description + ' is not a description')

        if (!description.trim().length) throw new Error('description is empty or blank')
    },
    validatePrice(price) {
        if (typeof price !== 'string') throw new TypeError(price + ' is not an id')
    },
    validateFile(file) {
        if (!(file instanceof File)) throw new TypeError(`${file} is not file`)
    },
    validateStream(stream) {
        // TODO where the f*ck is the the class to validate this instance!!?
    }
}