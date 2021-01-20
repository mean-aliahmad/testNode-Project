const galleryModel = require('../models/galleryModel');
const commonFunction = require('../helper/commonFunction');
const { commonResponse: response } = require('../helper/commonResponseHandler');
const { ErrorMessage } = require('../helper/message');
const { SuccessMessage } = require('../helper/message');
const { ErrorCode } = require('../helper/statusCode');
const { SuccessCode } = require('../helper/statusCode');
const { reject } = require('lodash');

module.exports = {
    addImage: async (req, res) => {
        console.log("xyz")
        var image = await Convert(req.body.image)
        var data = {
            image: await Convert(req.body.image)
        }
        var imageData = new galleryModel(data)
        imageData.save((saveErr, saved) => {
            if (saveErr) {
                response(res, ErrorCode.INTERNAL_ERROR, [], ErrorMessage.INTERNAL_ERROR);
            }
            else {
                console.log(saved)
                response(res, SuccessCode.SUCCESS, saved, SuccessMessage.UPLOAD_SUCCESS);
            }
        })
    },

    updateImage: async (req, res) => {
        var newImageData = await Convert(req.body.image)
        console.log(newImageData)
        galleryModel.findOneAndUpdate({ _id: req.body.imageId }, { $set: { image: newImageData } }, { new: true }, (updateErr, updateSucc) => {
            if (updateErr) {
                response(res, ErrorCode.INTERNAL_ERROR, ErrorMessage.INTERNAL_ERROR);
            }
            else {
                response(res, SuccessCode.SUCCESS, updateSucc, SuccessMessage.UPDATE_SUCCESS);
            }
        })
    },

    imageList: (req, res) => {
        galleryModel.find().sort({ createdAt: -1 }).exec((imgErr, imgData) => {
            if (imgErr) {
                response(res, ErrorCode.INTERNAL_ERROR, ErrorMessage.INTERNAL_ERROR);
            }
            else {
                response(res, SuccessCode.SUCCESS, imgData, SuccessMessage.UPDATE_SUCCESS);
            }
        })
    },
}

function Convert(image) {
    return new Promise((resolve, rej) => {
        // console.log(image)
        commonFunction.uploadImage(image, (imageErr, imageData) => {
            if (imageErr) {
                console.log(imageErr)
            }
            else {
                console.log(imageData)
                resolve(imageData)
            }
        })
    })
}
