const express = require('express');
const { getConfirmEvent,getEmailConfirmEvent,postConfirmEvent } = require('../controller/confirmEventCollection');


const router = express.Router();

router.get('/eventConfirmed', getConfirmEvent)
router.get('/confirmEvents/:email', getEmailConfirmEvent)
router.post('/confirmEvents', postConfirmEvent)

module.exports = router;