// const { validateProductName, validateProductDescription, validateProductPrice, validateProductGlutenFree, validateProductVegan, validateProductAlergenos, validateProductCategory, validateProductAvailable } = require('./helpers/validations')
const { Product } = require('../models')
// import { Product } from '../models'


module.exports = () =>
    Product
        .find().lean()
        .then(products => {
            if (!products) return []

            products = products.map(({ _id, name, description, price, glutenFree, vegan, alergenos, category, available }) => ({ id: _id.toString(), name, description, price, glutenFree, vegan, alergenos, category, available }))

            return products
        })

    //user = new User({ fullname, email, password })
    // return user.save()

    //user = { fullname, email, password }
    //return new User(user).save()
    //return User.create(user)