const express = require('express');
const Course = require('../models/Course');
const advancedResults = require('../middleware/advancedResults');
const { getCourses, createCourse } = require('../controllers/courses');
const router = express.Router({ mergeParams: true });
const { protect } = require('../middleware/auth');

router.route('/').get(advancedResults(Course, {
    path: 'bootcamp',
    select: 'name description'
}), getCourses).post(protect, createCourse);

module.exports = router;
