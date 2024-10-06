const express = require("express");
const { getUser, postUser, getAdmin, getModerator } = require("../controller/userCollection");

const router = express.Router();

router.get('/users', getUser)
router.post("/addUsers", postUser);
router.get('/admin/:email', getAdmin)
router.get('/moderator/:email', getModerator)
module.exports = router;