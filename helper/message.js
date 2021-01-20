/** 
 * @description All the Error messages that needed to be sent to Admin or App
 * @type {Object}
*/
module.exports.ErrorMessage = Object.freeze({
    INTERNAL_ERROR: 'Internal Server Error.',
    SOMETHING_WRONG: 'Something went wrong.',
    NOT_FOUND: 'Requested data not found.',
});

/** 
 * @description All the Success messages that needed to be sent to App or Admin
 * @type {Object}
*/
module.exports.SuccessMessage = Object.freeze({
  UPLOAD_SUCCESS:"Image uploaded successfully.",
  UPDATE_SUCCESS:"Image updated successfully.",
  DETAILS_GET:"Image found successfully."
});