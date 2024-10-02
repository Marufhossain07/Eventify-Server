const express = require('express');
const { getEmailConfirmEvent,postConfirmEvent } = require('../controller/confirmEventCollection');


const router = express.Router();

router.get('/confirmEvents/:email', getEmailConfirmEvent)
router.post('/confirmEvents', postConfirmEvent)

module.exports = router;