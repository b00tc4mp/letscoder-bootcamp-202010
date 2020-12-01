const { ContentError, LengthError, ValueError, FormatError } = require('../../../errors')

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

    validateProductName(name){
        if (typeof name !== 'string') throw new TypeError(name + ' is not a name')
            
        if (!name.trim().length) throw new Error('name is empty or blank')
    },

    validateProductDescription(description){
        if (typeof description !== 'string') throw new TypeError(description + ' is not a description')
            
        if (!description.trim().length) throw new Error('description is empty or blank')
    },

    validateProductPrice(price){
        if (typeof price !== 'string') throw new TypeError(price + ' is not a price')
            
        if (!price.trim().length) throw new Error('price is empty or blank')
    },

    validateProductGlutenFree(glutenFree){
        if (!(glutenFree === true || glutenFree === false)) throw new TypeError('glutenFree has to be true or false')
    },

    validateProductVegan(vegan){
        if (!(vegan === true || vegan === false)) throw new TypeError('vegan has to be true or false')
    },

    validateProductAlergenos(alergenos) {
        if (!(alergenos instanceof Array)) throw new TypeError(`${alergenos} is not an array`)

        alergenos.forEach(algIngredient => {
            if (typeof algIngredient !== 'string') throw new TypeError(algIngredient + ' is not a algIngredient')
            
            if (!algIngredient.trim().length) throw new Error('algIngredient is empty or blank')
        })

    },

    validateProductCategory(category) {
        if (typeof category !== 'string') throw new TypeError(category + ' is not a category')
            
        if (!category.trim().length) throw new Error('category is empty or blank')

        if (!(category === 'entrantes-parrilla' || category === 'empanadas' || category === 'ensaladas' || category === 'parrilla' || category === 'pescados'
        || category === 'otras-sugerencias' || category === 'acompañamientos-guarniciones' || category === 'postres' || category === 'aguas-refrescos'
        || category === 'vinos' || category === 'cervezas')) throw new Error(`category ${category} does not exist`)

        // entrantes parrilla, empanadas, ensaladas, parrilla, pescados, otras sugerencias, acompañamientos/guarniciones, postres, aguas/refrescos
        // vinos, cervezas
    },

    validateProductAvailable(available){
        if (!(available === true || available === false)) throw new TypeError('available has to be true or false')
    }
}