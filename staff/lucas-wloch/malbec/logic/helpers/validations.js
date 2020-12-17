module.exports = {
    validateEmail(email) {
        if (typeof email !== 'string') throw new TypeError(`${email} is not an e-mail`)

        if (!email.trim().length) throw new Error('e-mail is empty or blank')

        if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) throw new Error('invalid e-mail')
    },
    validateToken(token) {
        if( typeof token !== 'string') throw new TypeError(token + ' is not a token')
        if(!token.trim().length) throw new Error('token is empty or blank')
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

    validateId(id) {
        if (typeof id !== 'string') throw new TypeError(id + ' is not a id')

        if (!id.trim().length) throw new Error('id is empty or blank')

    },

    validateText(text){
        if (typeof text !== 'string') throw new TypeError(text + ' is not a text')

        if (!text.trim().length) throw new Error('text is empty or blank')
    },

    validateTags(tags){
        if (!(tags instanceof Array)) throw new TypeError(`${tags} is not an array`)

        tags.forEach(tag => {
            if (typeof tag !== 'string') throw new TypeError(tag + ' is not a tag')

            if (!tag.trim().length) throw new Error('tag is empty or blank')
        })
    },

    validateVisibility(visibility){
        if (!(visibility === 'public' || visibility === 'private' )) throw new Error('visibility can only be public or private')
    },

    validateFollows(follows){
        if (!(follows instanceof Array)) throw new TypeError(`${follows} is not an array`)

        follows.forEach(userId => {
            if (typeof userId !== 'string') throw new TypeError(userId + ' is not a userId')

            if (!userId.trim().length) throw new Error('userId is empty or blank')
        })
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
        || category === 'vinos' || category === 'cervezas' || category === 'tragos')) throw new Error(`category ${category} does not exist`)

        // entrantes parrilla, empanadas, ensaladas, parrilla, pescados, otras sugerencias, acompañamientos/guarniciones, postres, aguas/refrescos
        // vinos, cervezas
    },

    validateProductAvailable(available){
        if (!(available === true || available === false)) throw new TypeError('available has to be true or false')
    },
    validateFile(file) {
        if (!(file instanceof File)) throw new TypeError(`${file} is not file`)
    },

    validateKey(key){
        if (typeof key !== 'string') throw new TypeError(key + ' is not a key')

        if (!key.trim().length) throw new Error('key is empty or blank')
    }
}