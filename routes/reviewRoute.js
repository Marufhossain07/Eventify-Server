const express = require("express");
const { getReview, addReview, getReviewByEmail } = require("../controller/reviewCollection");

const router = express.Router()

router.get('/reviews', getReview)
router.post('/add-review', addReview)
router.get('/review/:email', getReviewByEmail)
module.exports = router;