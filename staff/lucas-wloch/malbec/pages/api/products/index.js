import dbConnect from '../../../utils/dbConnect'
import { handleError, cors } from '../../../utils'
const { saveProducts, retrieveProducts } = require('../../../api/logic')


dbConnect();

export default async (req, res) => {
    const { method } = req

    cors(req, res)

    switch (method) {
        case 'GET':
            try {
                retrieveProducts()
                    .then(results => res.status(200).json(results))
                    .catch(error => handleError(req, res, error))
            } catch (error) {
                return handleError(req, res, error)
            }
            break;
        case 'POST':
            const { body: { name, description, price, glutenFree, vegan, alergenos, category, available } } = req

            // res.status(200).json({fullname, email, password})

            try {
                debugger
                saveProducts(name, description, price, glutenFree, vegan, alergenos, category, available)
                    .then(result => res.status(201).json({ success: true }))
                    .catch(error => handleError(req, res, error))
            } catch (error) {
                return handleError(req, res, error)
            }
            break;
    }
}