const express = require('express');
const { postRequiredItems,updateRequiredItems } = require('../controller/moderatorItems');


const router = express.Router();

router.post('/requiredItems', postRequiredItems)
router.put('/requiredItem/:selectedEvent', updateRequiredItems);


module.exports = router;