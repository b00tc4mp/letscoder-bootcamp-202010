module.exports = {

    validateUserName(userName) {
        if (typeof userName !== 'string') throw new TypeError(`${userName} is not a userName`)

        if (!userName.trim().length) throw new Error('userName is empty or blank')
    },
    validateEmail(email) {
        if (typeof email !== 'string') throw new TypeError(`${email} is not an e-mail`)

        if (!email.trim().length) throw new Error('e-mail is empty or blank')

        if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) throw new Error('invalid e-mail')
    },

    validatePassword(password) {
        if (typeof password !== 'string') throw new TypeError(`${password} is not a password`)

        if (!password.trim().length) throw new Error('password is empty or blank')

    },
    validateAddress(address) {
        if (typeof address !== 'string') throw new TypeError(`${address} is not a address`)

        if (!address.trim().length) throw new Error('address is empty or blank')
    },
    validateCity(city) {
        if (typeof city !== 'string') throw new TypeError(`${city} is not a city`)

        if (!city.trim().length) throw new Error('city is empty or blank')
    },

    validatePhone(phone) {
        if (typeof phone !== 'string') throw new TypeError(`${phone} is not a phone`)

    },
    validateId(id) {
        if (typeof id !== 'string') throw new TypeError(id + ' is not an id')

        if (!id.trim().length) throw new ContentError('id is empty or blank')

        if (id.length !== 24) throw new LengthError(`id length ${id.length} is not 24`)
    },
    validateName(name) {
        if (typeof name !== 'string') throw new TypeError(`${name} is not a name`)

        if (!name.trim().length) throw new Error('name is empty or blank')
    },
    validateBreed(breed) {
        if (typeof breed !== 'string') throw new TypeError(`${breed} is not a breed`)

        if (!breed.trim().length) throw new Error('breed is empty or blank')
    },
    validateColor(color) {
        if (typeof color !== 'string') throw new TypeError(`${color} is not a color`)
    },

    validateDescription(description) {
        if (typeof description !== 'string') throw new TypeError(`${description} is not a description`)

    },

    validateQuery(query) {
        if (typeof query !== 'string') throw new TypeError(`${query} is not a query`)

        if (!query.trim().length) throw new ContentError('query is empty or blank')
    }

   
}