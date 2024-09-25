const express = require('express');
const { getEvent, postEvent } = require('../controller/eventCollection');


const router = express.Router();

router.get('/', getEvent)

router.post('/add-event', postEvent)


module.exports = router;