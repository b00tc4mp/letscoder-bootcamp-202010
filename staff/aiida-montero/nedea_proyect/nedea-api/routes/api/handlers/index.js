
module.exports = {
    handleRegisterUser: require('./handle-register-user'),
    handleAuthenticateUser: require('./handle-authenticate-user'),
    handleRetrieveUser: require('./handle-retrieve-user'),
    handleSavePictogram: require('./handle-save-pictogram'),
    handleFindPictogram: require('./handle-find-pictogram'),
    handleFindPictogramByUser: require ('./handle-find-pictogram-by-user'),
    handleSavePictogramImage: require('./handle-save-pictogram-image'),
    handleRetrievePictogramImage: require('./handle-retrieve-pictogram-image'),
    handleToggleLikePictogram: require('./handle-toggle-like-pictogram'),
    handleRetrieveFavouritePictogram: require('./handle-retrieve-favourite-pictogram'),
    handleDeletePictogram : require('./handle-delete-pictogram'),
    handleModifyPictogram : require ('./handle-modify-pictogram')
}