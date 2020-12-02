const { validateProductName, validateProductDescription, validateProductPrice, validateProductGlutenFree, validateProductVegan, validateProductAlergenos, validateProductCategory, validateProductAvailable } = require('./helpers/validations')
const { ConflictError } = require('../../errors')
const { Product } = require('../models')


module.exports = ((name, description, price, glutenFree, vegan, alergenos, category, available) => {
    validateProductName(name)
    validateProductDescription(description)
    validateProductPrice(price)
    validateProductGlutenFree(glutenFree)
    validateProductVegan(vegan)
    validateProductAlergenos(alergenos)
    validateProductCategory(category)
    validateProductAvailable(available)


    return Product
        .findOne({ $or: [{ name }, { description }] })
        .then(product => {
            if (product) throw new ConflictError(`product with name ${name} already exists`)

            return Product.create({ name, description, price, glutenFree, vegan, alergenos, category, available })
        })
        .then(() => { })
})
    //user = new User({ fullname, email, password })
    // return user.save()

    //user = { fullname, email, password }
    //return new User(user).save()
    //return User.create(user)