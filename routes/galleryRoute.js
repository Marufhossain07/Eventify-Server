const express = require('express');
const { getImage } = require('../controller/galleryEventCollection');
const { uploadImage } = require('../controller/galleryEventCollection');
const { deleteUser } = require('../controller/galleryEventCollection');


const router = express.Router();

router.get('/gallery', getImage)




router.post('/uploadMedia', uploadImage),
    router.delete('/media/:id', deleteUser)
module.exports = router;