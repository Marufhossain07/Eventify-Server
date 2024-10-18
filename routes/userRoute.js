const express = require("express");
const { getUser,getUserByEmail, postUser, getAdmin, getModerator, makeAdmin, makeModerator,deleteUser } = require("../controller/userCollection");

const router = express.Router();

router.get('/users', getUser)
router.get('/users/:email', getUserByEmail)
router.post("/addUsers", postUser);
router.get('/admin/:email', getAdmin)
router.get('/moderator/:email', getModerator)
router.patch('/users/admin/:id', makeAdmin)
router.patch('/users/moderator/:id', makeModerator)
router.delete('/user/:id',deleteUser)
module.exports = router;