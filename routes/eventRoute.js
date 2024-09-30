const express = require('express');
const { getEvent,getIdEvent, postEvent } = require('../controller/eventCollection');


const router = express.Router();

router.get('/events', getEvent)

router.get('/events/:_id', getIdEvent)

router.post('/add-event', postEvent)


module.exports = router;