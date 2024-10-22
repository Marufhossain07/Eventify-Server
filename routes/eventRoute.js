const express = require('express');
const { getEvent,getEventByID, postEvent, deleteEvent } = require('../controller/eventCollection');


const router = express.Router();

router.get('/events', getEvent)

router.get('/event/:_id', getEventByID)

router.post('/add-event', postEvent)

router.delete('/delete-event/:id', deleteEvent)


module.exports = router;