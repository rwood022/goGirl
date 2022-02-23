const aws = require("aws-sdk");
const multer = require("multer");
const multers3 = require("multer-s3");

const User = require('../models/userModel');
const s3 = new aws.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_ACCESS_KEY_ID,
    region: process.env.US East (N. Virginia) us-east-1,
})


const upload = (bucketName) =>
    multer({
        storage: multers3({
            s3:s3,
            bucket:bucketName,
            metadata: function (req, file, cb) {
                cb(null, { fieldName: file.fieldname });
            },
            key: function (req, file, cb) {
                cb(null, 'image-${Date.now()}.jpeg');
            },
        }),
    });

    exports.setProfilePic = (req, res, next) => {
        console.log(req.files);

    const uploadSingle = upload("gogirlapp").single('image-upload');

uploadSingle(req, res, err => {
    if(err) 
        return res.status(400).json({success: false, message: err.message})

        await User.create({photoUrl: req.file.location});
        
    console.log(req.files);

    res.status(200).json({ data: req.files });
});
};