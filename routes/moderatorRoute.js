const express = require('express');
const { postRequiredItems,updateRequiredItems,getItems } = require('../controller/moderatorItems');


const router = express.Router();

router.get('/items', getItems)
router.post('/requiredItems', postRequiredItems)
router.put('/requiredItem/:selectedEvent', updateRequiredItems);


module.exports = router;