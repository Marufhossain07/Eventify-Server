const express = require("express");
const { getUser, postUser } = require("../controller/userCollection");

const router = express.Router();

router.get('/users', getUser)
router.post("/addUsers", postUser);

module.exports = router;