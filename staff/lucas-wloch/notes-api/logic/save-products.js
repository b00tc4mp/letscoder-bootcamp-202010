const { validateProductName, validateProductDescription, validateProductPrice, validateProductGlutenFree, validateProductVegan, validateProductAlergenos, validateProductCategory, validateProductAvailable, validateCallback } = require('./helpers/validations')
const { AlreadyExistsError } = require('../errors')
const fs = require('fs')
const path = require('path')



module.exports = (name, description, price, glutenFree, vegan, alergenos, category, available) => {
    validateProductName(name)
    validateProductDescription(description)
    validateProductPrice(price)
    validateProductGlutenFree(glutenFree)
    validateProductVegan(vegan)
    validateProductAlergenos(alergenos)
    validateProductCategory(category)
    validateProductAvailable(available)

    const productsPath = path.join(__dirname, `../malbec/${category}`)
    debugger
    return new Promise((resolve, reject) => {

        fs.readdir(productsPath, (error, files) => {
            if (error) return reject(new Error('problem reading files'));

            (function check(files, index = 0) {
                if (index < files.length) {
                    const file = files[index]

                    fs.readFile(path.join(productsPath, file), 'utf8', (error, json) => {
                        if (error) return reject(new Error('problem reading file'))

                        const { name: _name, description: _description } = JSON.parse(json)

                        if (name === _name || description === _description) {

                            return reject(new AlreadyExistsError(`product with name ${name} already exists`))

                        } else check(files, ++index)
                    })
                } else {
                    const product = { name, description, price, glutenFree, vegan, alergenos, category, available }

                    const json = JSON.stringify(product)

                    fs.writeFile(path.join(productsPath, `${name.replace(' ', '-')}.json`), json, error => {
                        if (error) return reject (new Error('problem writing file'))

                        return resolve()
                    })
                }
            })(files);
        })
    })
}   