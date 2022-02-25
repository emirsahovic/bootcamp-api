const express = require('express');
const { getBootcamps, getBootcamp, createBootcamp } = require('../controllers/bootcamps');
const { protect } = require('../middleware/auth');
const Bootcamp = require('../models/Bootcamp');
const advancedResults = require('../middleware/advancedResults');
const router = express.Router();

router.route('/').get(advancedResults(Bootcamp, 'user'), getBootcamps).post(protect, createBootcamp);
router.route('/:id').get(getBootcamp);

module.exports = router;
