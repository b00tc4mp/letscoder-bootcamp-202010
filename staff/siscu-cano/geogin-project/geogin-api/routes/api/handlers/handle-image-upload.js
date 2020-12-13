
const cloudinary = require('cloudinary').v2

module.exports = async (req, res, handleError) => {

    try {
        const dataImage = req.body.data;
        const uploadResponse = await cloudinary.uploader.upload(dataImage, {folder: 'img' });
        res
            .status(201)
            .json({
                message: "success",
                uploadResponse: uploadResponse
            })
            .send();

    } catch (error) {
        handleError(error)
    }

}