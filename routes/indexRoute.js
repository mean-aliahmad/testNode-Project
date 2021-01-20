const router = require('express').Router();
const user = require('./userRoute/galleryRoutes')


router.use('/user', user)

module.exports = router;
