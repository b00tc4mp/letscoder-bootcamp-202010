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

    validateFullname(fullname) {
        if (typeof fullname !== 'string') throw new TypeError(fullname + ' is not a fullname')

        if (!fullname.trim().length) throw new Error('fullname is empty or blank')
    },

    validateRole(role) {
        if (typeof role !== 'string') throw new TypeError(role + ' is not a role')

        if (!role.trim().length) throw new Error('role is empty or blank')
    },


    validateArtistName(artistName) {
        if (typeof artistName !== 'string') throw new TypeError(artistName + ' is not a artistName')

        if (!artistName.trim().length) throw new Error('artistName is empty or blank')
    },

    validateCity(city) {
        if (typeof city !== 'string') throw new TypeError(city + ' is not a city')

        if (!city.trim().length) throw new Error('city is empty or blank')
    },

    validateDescription(description) {
        if (typeof description !== 'string') throw new TypeError(description + ' is not a description')

        if (!description.trim().length) throw new Error('description is empty or blank')
    },

    validateId(id) {
        if (typeof id !== 'string') throw new TypeError(id + ' is not an id')

        if (!id.trim().length) throw new Error('id is empty or blank')

        if (id.length !== 24) throw new Error(`id length ${id.length} is not 24`)
    },

    validateToken(token) {
        if (typeof token !== 'string') throw new TypeError(token + ' is not a token')

        if (!token.trim().length) throw new Error('token is empty or blank')
    },

    validateTitle(title) {
        if (typeof title !== 'string') throw new TypeError(title + ' is not a title')

        if (!title.trim().length) throw new Error('title is empty or blank')
    },

    validateLiveDate(liveDate) {
        if (typeof liveDate !== 'string') throw new TypeError(liveDate + ' is not a liveDate')

        if (!liveDate.trim().length) throw new Error('liveDate is empty or blank')
    },

    validateStatus(status) {
        if (typeof status !== 'string') throw new TypeError(status + ' is not a status')

        if (!status.trim().length) throw new Error('status is empty or blank')
    },

    validateDuration(duration) {
        if (typeof duration !== 'string') throw new TypeError(duration + ' is not a duration')

        if (!duration.trim().length) throw new Error('duration is empty or blank')
    },

    validatePayment(payment) {
        if (typeof payment !== 'string') throw new TypeError(payment + ' is not a payment')

        if (!payment.trim().length) throw new Error('payment is empty or blank')
    },

    validateTags(tags) {
            if (typeof tags !== 'string') throw new TypeError(tags + ' is not a tag')
    },

    
}
