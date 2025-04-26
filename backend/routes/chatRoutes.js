const express = require('express');
const router = express.Router();
const {getChatsController, getSingleChatController} = require('../controllers/chatController');

router.get("/", getChatsController);
router.get("/:id", getSingleChatController);

module.exports = router;