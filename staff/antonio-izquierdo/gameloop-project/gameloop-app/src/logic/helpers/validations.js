const {
    ContentError,
  } = require('gameloop-errors')

module.exports = {
    validateFullname(fullname) {
        if (typeof fullname !== 'string') throw new TypeError(fullname + ' is not a fullname')

        if (!fullname.trim().length) throw new Error('name is empty or blank')
    },

    validateEmail(email) {
        if (typeof email !== 'string') throw new TypeError(`${email} is not an e-mail`)

        if (!email.trim().length) throw new Error('e-mail is empty or blank')

        if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) throw new Error('invalid e-mail')
    },

    validateDescription(description) {
        if (typeof description !== 'string') throw new TypeError(description + ' is not a game description')

        if (!description.trim().length) throw new Error('description is empty or blank')
    },

    validateText(text) {
        if (typeof text !== 'string') throw new TypeError(`${text} is not a text`)

        if (!text.trim().length) throw new ContentError('text is empty or blank')
    },

    validatePassword(password) {
        if (typeof password !== 'string') throw new TypeError(password + ' is not a password')

        if (!password.trim().length) throw new Error('password is empty or blank')
    },

    validateCallback(callback) {
        if (typeof callback !== 'function') throw new TypeError(callback + ' is not a callback')
    },

    validateGameConsole(gameconsole) {
        if (typeof gameconsole !== 'string') throw new TypeError(`${gameconsole} is not an string`)

        if (!gameconsole.trim().length) throw new ContentError('gameconsole is empty or blank')

        if (!gameconsole.includes('game boy') && !gameconsole.includes('nintendo') && !gameconsole.includes('wii') && !gameconsole.includes('play station') && !gameconsole.includes('xbox')) throw new TypeError(`${gameconsole} is not a valid gameconsole`)
//                                 'game boy',   'game boy advance',   'game boy color',   'nintendo ds',   'nintendo 3ds',   'nintendo switch',   'wii',   'wii u',   'play station 1',   'play station 2',   'play station 3',   'play station 4',   'play station 5',   'xbox',   'xbox 360',   'xbox one'
        if (!gameconsole.trim().length) throw new ContentError('gameconsole is empty or blank')
    },

    validateToken(token) {
        if (typeof token !== 'string') throw new TypeError(token + ' is not a token')

        if (!token.trim().length) throw new Error('token is empty or blank')
    },

    validatePrice(price) {
        if (typeof price !== 'number') throw new TypeError(`${price} is not a number`)

        if (!price) throw new ContentError('price is empty or blank')
        
        if(price < 0) throw new ContentError(`${price} is a negative number`)
    },


    validateId(id) {
        if (typeof id !== 'string') throw new TypeError(id + ' is not a id')

        if (!id.trim().length) throw new Error('id is empty or blank')

        if (id.length !== 24) throw new Error('id length is not 24')
    },

    validateFile(file) {
        if (!(file instanceof File)) throw new TypeError(`${file} is not file`)
    },

    validateQuery(query) {
        if (typeof query !== 'string') throw new TypeError(`${query} is not a query`)

        if (!query.trim().length) throw new ContentError('query is empty or blank')
    },
}
