const express = require('express');
const { createEvent, getEvents } = require('../controllers/eventController');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', authMiddleware, createEvent);  // Protected Route
router.get('/', getEvents);

module.exports = router;
