const { ContentError, LengthError, FormatError } = require('../../errors')

module.exports = {
    
    validateFullname(fullname) {
        if (typeof fullname !== 'string') throw new TypeError(`${fullname} is not a fullname`)

        if (!fullname.trim().length) throw new ContentError('fullname is empty or blank')
    },

    validateEmail(email) {
        if (typeof email !== 'string') throw new TypeError(`${email} is not an e-mail`)

        if (!email.trim().length) throw new ContentError('e-mail is empty or blank')

        if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) throw new FormatError('invalid e-mail')
    },

    validatePassword(password) {
        if (typeof password !== 'string') throw new TypeError(`${password} is not a password`)

        if (!password.trim().length) throw new ContentError('password is empty or blank')
    },

    validateCallback(callback) {
        if (typeof callback !== 'function') throw new TypeError(`${callback} is not a text`)
    },

    validateText(text) {
        if (typeof text !== 'string') throw new TypeError(`${text} is not a text`)

        if (!text.trim().length) throw new ContentError('text is empty or blank')
    },

    validateId(id) {
        if (typeof id !== 'string') throw new TypeError(`${id} is not an id`)

        if (!id.trim().length) throw new ContentError('id is empty or blank')

        if (id.length !== 24) throw new LengthError(`id length ${id.length} is not 24`)
    },

    validateQuery(query) {
        if (typeof query !== 'string') throw new TypeError(`${query} is not a query`)
    },

    validatePrice(budget) {
        if (typeof budget !== 'string') throw new TypeError(`${budget} is not a number`)

        if (!budget.trim().length) throw new ContentError('price is empty or blank')
        
        if(budget < 0) throw new ContentError(`${budget} is a negative number`)
    },

    validateFile(file) {
        if (!(file instanceof File)) throw new TypeError(`${file} is not file`)
    }
}