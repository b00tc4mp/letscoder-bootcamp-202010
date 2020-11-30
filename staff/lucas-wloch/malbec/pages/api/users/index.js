import dbConnect from '../../../utils'

dbConnect();

export default async (req, res) => {
    const { method } = req

    switch(method){
        case 'GET':
            try {
                retrieveUser(userId)
                    .then(user => res.status(200).json(user))
                    .catch(handleError)
            } catch (error) {
                handleError(error)
            }
            break;
        case 'POST':
            try {
                registerUser(fullname, email, password)
                    .then(result => res.status(201).send())
                    .catch(handleError)
            } catch (error) {
                handleError(error)
            }
            break;
    }
}