const router = require('express').Router()
const galleryController = require('../../controllers/galleryController');

router.post('/image',galleryController.addImage)
router.put('/image',galleryController.updateImage)
router.get('/list',galleryController.imageList)
module.exports = router;

