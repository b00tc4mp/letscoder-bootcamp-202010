const { ConflictError, NotFoundError } = require('../errors')
const { Product } = require('../models')

const fsp = require('fs').promises
const path = require('path')

module.exports = () => {
    return Product.find().lean()
        .then(products => {

            const productsPath = path.join(__dirname, '../data/products')

            return products.map(({ _id, name, description, price, glutenFree, vegan, alergenos, category, available }) => {

                return fsp.readdir(productsPath)
                    .then(files => {

                        (function check(files, index = 0) {
                            if (index < files.length) {
                                const file = files[index]

                                return fsp.readFile(path.join(productsPath, file), 'utf8')
                                    .then(json => {

                                        const { name: _name, description: _description, price: _price, category: _category, _id,
                                            glutenFree: _glutenFree, vegan: _vegan, alergenos: _alergenos, available: _available } = JSON.parse(json)

                                        if (name === _name &&
                                            description === _description &&
                                            price === _price &&
                                            category === _category) {

                                            const product = { _id, name, description, price, glutenFree, vegan, alergenos, category, available }

                                            const json = JSON.stringify(product)

                                            const id = _id.toString()

                                            return fsp.writeFile(path.join(productsPath, `${id}.json`), json)
                                                .then(() => null)

                                        } else check(files, ++index)
                                    })
                            } else {
                                const product = { _id, name, description, price, glutenFree, vegan, alergenos, category, available }

                                const json = JSON.stringify(product)

                                const id = _id.toString()

                                return fsp.writeFile(path.join(productsPath, `${id}.json`), json)
                                    .then(() => null)
                            }
                        })(files)
                    })
            })
        })

}



