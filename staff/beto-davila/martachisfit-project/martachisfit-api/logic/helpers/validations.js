const { ContentError, LengthError, ValueError, FormatError } = require('martachisfit-errors')

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

    validateFullname(fullname) {
        if (typeof fullname !== 'string') throw new TypeError(fullname + ' is not a fullname')

        if (!fullname.trim().length) throw new ContentError('fullname is empty or blank')
    },

    validateId(id) {
        if (typeof id !== 'string') throw new TypeError(id + ' is not an id')

        if (!id.trim().length) throw new ContentError('id is empty or blank')

        if (id.length !== 24) throw new LengthError(`id length ${id.length} is not 24`)
    },

    validateName(name) {
        if (typeof name !== 'string') throw new TypeError(name + ' is not a name')

        if (!name.trim().length) throw new ContentError('name is empty or blank')
    },

    // validateGender(gender) {
    //     if (typeof gender !== 'string') throw new TypeError(gender + ' is not a gender')

    //     if (!gender.trim().length) throw new ContentError('gender is empty or blank')

    //     if (gender !== 'hombre' && gender !== 'mujer') throw new ValueError('gender is not "hombre" or "mujer"')
    // },

    validateNumber(number) {
        if (typeof number !== 'number') throw new TypeError(number + ' is not a number')
    },

    validateQuery(query) {
        if (typeof query !== 'string') throw new TypeError(query + ' is not a query')

        if (!query.trim().length) throw new ContentError('query is empty or blank')
    },

    validateDietType(dietType) {
        if (typeof dietType !== 'string') throw new TypeError(dietType + ' is not a diet type')

        if (dietType !== 'mediterranean' && dietType !== 'keto' && dietType !== 'vegan') throw new Error('diet type is not "vegan" or "mediterranean" or "keto"')
    },

    validateMuscularGroup(group) {
        if (typeof group !== 'string') throw new TypeError(group + ' is not a group')

        if (!group.trim().length) throw new ContentError('group is empty or blank')

        if (group !== 'biceps' && 
        group !== 'triceps' && 
        group !== 'abdomen' && 
        group !== 'hombro' && 
        group !== 'espalda' && 
        group !== 'pierna' && 
        group !== 'pectoral' && 
        group !== 'gemelo') throw new Error('Invalid muscular group')

    },

    validateLevel(level) {
        if (typeof level !== 'string') throw new TypeError(level + ' is not a level')

        if (!level.trim().length) throw new ContentError('level is empty or blank')

        if (level !== 'beginner' && level !== 'intermediate' && level !== 'advanced') throw new Error('level is neither "beginner" nor "intermediate" nor "advanced"')
    },

    validateToken(token) {
        if (typeof token !== 'string') throw new TypeError(token + ' is not a token')

        if (!token.trim().length) throw new ContentError('token is empty or blank')
    },

    validateFile(file) {
        if (!(file instanceof File)) throw new TypeError(`${file} is not file`)
    }
}