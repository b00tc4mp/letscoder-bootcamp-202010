const { ContentError, LengthError, FormatError} = require('../../errors')

module.exports = {
    validateEmail(email) {
        if (typeof email !== 'string') throw new TypeError(`${email} is not an e-mail`)

        if (!email.trim().length) throw new ContentError('e-mail is empty or blank')

        if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) throw new FormatError('invalid e-mail')
    },

    validatePassword(password) {
        if (typeof password !== 'string') throw new TypeError(password + ' is not a password')

        if (!password.trim().length) throw new ContentError('password is empty or blank')
    },

    validateCallback(callback) {
        if (typeof callback !== 'function') throw new TypeError(callback + ' is not a callback')
    },

    validateName(name) {
        if (typeof name !== 'string') throw new TypeError(name + ' is not a name')

        if (!name.trim().length) throw new ContentError('name is empty or blank')
    },

    validateId(id) {
        if (typeof id !== 'string') throw new TypeError(id + ' is not an id')

        if (!id.trim().length) throw new ContentError('id is empty or blank')

        if (id.length !== 24) throw new LengthError(`id length ${id.length} is not 24`)
    },

    validateDescription(description) {
        if (typeof description !== 'string') throw new TypeError(`${description} is not a description`)

        if (!description.trim().length) throw new ContentError('description is empty or blank')
    },
    validatePrice(price) {        
        if (typeof price !== 'string' && (!(price instanceof Number))) throw new TypeError(`${price} is not a number`)

        if (!price.trim().length) throw new ContentError('price is empty or blank')
        
        if(price < 0) throw new ContentError(`${price} is a negative number`)
    },
    
    validateQuery(query) {
        if (typeof query !== 'string') throw new TypeError(`${query} is not a query`)

        if (!query.trim().length) throw new ContentError('query is empty or blank')
    },

    validateStream(stream) {
        // TODO where the f*ck is the the class to validate this instance!!?
    },
    validateAddress(address) {
        if (typeof address !== 'string') throw new TypeError(`${address} is not an address`)

        if (!address.trim().length) throw new ContentError('address is empty or blank')

    },
    validateCity(city) {
        if (typeof city !== 'string') throw new TypeError(`${city} is not a city`)

        if (!city.trim().length) throw new ContentError('city is empty or blank')
    },

    validatePhone(phone) {
        if (typeof phone !== 'string') throw new TypeError(`${phone} is not a phone`)

        if (!phone.trim().length) throw new ContentErro
 
}

}
