const express = require('express');
const { getImage } = require('../controller/galleryEventCollection');


const router = express.Router();

router.get('/gallery', getImage)

module.exports = router;