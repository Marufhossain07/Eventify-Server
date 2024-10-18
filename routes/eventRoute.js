const express = require('express');
const { getEvent,getIdEvent, postEvent, deleteEvent } = require('../controller/eventCollection');


const router = express.Router();

router.get('/events', getEvent)

router.get('/event/:_id', getIdEvent)

router.post('/add-event', postEvent)

router.delete('/delete-event/:id', deleteEvent)


module.exports = router;