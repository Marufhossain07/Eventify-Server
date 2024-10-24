const express = require('express');
const { postRequiredItems,updateRequiredItems,getItems,getConfirmedItems } = require('../controller/moderatorItems');


const router = express.Router();

router.get('/items', getItems)
router.get('/confirmedItems', getConfirmedItems)
router.post('/requiredItems', postRequiredItems)
router.put('/requiredItem/:selectedEvent', updateRequiredItems);


module.exports = router;