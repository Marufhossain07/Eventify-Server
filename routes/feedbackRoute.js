const express = require('express');
const { getFeedback, postFeedback } = require('../controller/feedbackCollection');


const router = express.Router();

router.get('/feedbacks', getFeedback)
router.post('/add-feedback', postFeedback)



module.exports = router;