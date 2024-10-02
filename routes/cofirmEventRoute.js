const express = require('express');
const { postConfirmEvent } = require('../controller/confirmEventCollection');


const router = express.Router();

router.post('/confirmEvents', postConfirmEvent)

module.exports = router;