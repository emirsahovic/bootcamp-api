const User = require('../models/User');
const asyncHandler = require('express-async-handler');

exports.registerUser = asyncHandler(async (req, res, next) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ success: false, message: 'Please enter your name, email and password' });
    }

    const userMatch = await User.findOne({ email: req.body.email });

    if (userMatch) {
        return res.status(400).json({ success: false, message: 'User with that email already exists' });
    }

    const user = await User.create(req.body);

    res.status(201).json({ success: true, data: user });
})
