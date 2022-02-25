const express = require('express');
const { getBootcamps, getBootcamp, createBootcamp } = require('../controllers/bootcamps');
const { protect } = require('../middleware/auth');
const router = express.Router();

router.route('/').get(getBootcamps).post(protect, createBootcamp);
router.route('/:id').get(getBootcamp);

module.exports = router;
