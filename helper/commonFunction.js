const config = require('../config/config')
const cloudinary = require('cloudinary');
cloudinary.config({
  cloud_name: global.gConfig.cloudinary.cloud_name,
  api_key: global.gConfig.cloudinary.api_key,
  api_secret: global.gConfig.cloudinary.api_secret
});
const async = require('async');
module.exports = {
  uploadImage(img, callback) {
    cloudinary.v2.uploader.upload(img, (err, result) => {
      if (err) {
        callback(err, null)
      }
      else {
        callback(null, result.secure_url)
      }
    });
  },

  uploadMultipleImage: (imageB64, callback) => {
    let imageArr = []
    async.eachSeries(imageB64, (items, callbackNextiteration) => {
      module.exports.uploadImage(items, (err, url) => {

        if (err)
          console.log("error is in line 119", err)
        else {
          imageArr.push(url);
          callbackNextiteration();
        }
      })
    }, (err) => {
      console.log("imageArr", imageArr)

      callback(null, imageArr);

    }

    )
  }
}