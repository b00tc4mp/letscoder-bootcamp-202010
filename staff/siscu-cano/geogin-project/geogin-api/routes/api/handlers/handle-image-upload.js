
const cloudinary = require('cloudinary').v2

module.exports = async (req, res, handleError) => {

    try {
        const dataImage = req.body.data;
        const uploadResponse = await cloudinary.uploader.upload(dataImage);
        res
            .status(200)
            .json({
                message: "success upload image",
                uploadResponse: uploadResponse
            })
            .send();

    } catch (error) {
        handleError(error)
    }

}