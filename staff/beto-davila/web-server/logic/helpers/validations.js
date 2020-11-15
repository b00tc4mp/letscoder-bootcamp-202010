module.exports = {
    validateEmail(email) {
        if (typeof email !== 'string') throw new TypeError(`${email} is not an e-mail`)

        if (!email.trim().length) throw new Error('e-mail is empty or blank')

        if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) throw new Error('invalid e-mail')
    },

    validatePassword(password) {
        if (typeof password !== 'string') throw new TypeError(`${password} is not a password`)

        if (!password.trim().length) throw new Error('password is empty or blank')
    },

    validateId(id) {
        if (typeof id !== 'string') throw new TypeError(`${id} is not an id`)

        if (!id.trim().length) throw new Error('id is empty or blank')

        if (id.length !== 31) throw new Error('id length is not 31')
    },

    validateQuery(query){

        if (typeof query !== 'string') throw new TypeError(query + ' is not a full name')

        if (!query.trim().length) throw new Error('query is empty or blank')

    },

    validateFullname(fullname){

        if (typeof fullname !== 'string') throw new TypeError(fullname + ' is not a full name')

        if (!fullname.trim().length) throw new Error('full name is empty or blank')

    },
    validateCallback(callback) {
        if (typeof callback !== 'function') throw new TypeError(callback + ' is not a callback')
    }
}