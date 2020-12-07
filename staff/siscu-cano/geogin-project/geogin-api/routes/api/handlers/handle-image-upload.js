
const cloudinary = require('cloudinary').v2

module.exports = async (req, res, handleError) => {

    try {
        const fileStr = req.body.data;
        const uploadResponse = await cloudinary.uploader.upload(fileStr, {});
        res.status(200).json({
            message: "success",
            uploadResponse: uploadResponse, }).send();

    } catch (err) {
        console.error(err);
        res.status(500).json({ err: 'Something went wrong' });
    }

}