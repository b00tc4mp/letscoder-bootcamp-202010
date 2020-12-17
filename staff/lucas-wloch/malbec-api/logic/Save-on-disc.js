const { models: { Product }, mongoose } = require('malbec-data')

const fs = require('fs')
const { promises: fsp } = fs
const path = require('path')

module.exports = () => {
    return Product.find().lean()
        .then(products => {

            const productsPath = path.join(__dirname, '../data/products/copies')

            products.map(({ _id, name, description, price, glutenFree, vegan, alergenos, category, available }) => {
                const id = _id.toString()
                const file = path.join(productsPath, `/${id}.json`)

                return fsp.access(file, fs.constants.F_OK)
                    .then(() => {
                        const product = { _id, name, description, price, glutenFree, vegan, alergenos, category, available }

                        const json = JSON.stringify(product)

                        return fsp.writeFile(path.join(productsPath, `${id}.json`), json)
                            .then(() => null)
                            .catch(error => { throw new Error(error.message) })

                    })
                    .catch(() => {
                        const product = { _id, name, description, price, glutenFree, vegan, alergenos, category, available }

                        const json = JSON.stringify(product)

                        return fsp.writeFile(path.join(productsPath, `${id}.json`), json)
                            .then(() => null)
                            .catch(error => { throw new Error(error.message) })
                    })
            })

        }
        )
}


