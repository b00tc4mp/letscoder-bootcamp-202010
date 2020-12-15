const findMenu = require("../../../logic/find-menu")


module.exports = (req, res, handleError) => {

    try {
        findMenu()
            .then((menu) => res.status(200).send({ menu }))
            .catch(handleError)
    } catch (error) {
        handleError(error)
    }
}