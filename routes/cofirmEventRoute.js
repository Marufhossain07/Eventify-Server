const express = require('express');
const { getConfirmEvent,getEmailConfirmEvent,postConfirmEvent,updateEventData, getCompletedEvents, getEventById } = require('../controller/confirmEventCollection');


const router = express.Router();

router.get('/eventConfirmed', getConfirmEvent)
router.get('/confirmEvents/:email', getEmailConfirmEvent)
router.post('/confirmEvents', postConfirmEvent)
router.put('/addOrganizer/:id',updateEventData)
router.get('/completedEvents/:email',getCompletedEvents)
router.get('/eventConfirmed/:id', getEventById)

module.exports = router;