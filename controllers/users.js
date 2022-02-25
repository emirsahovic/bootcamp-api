const User = require('../models/User');
const asyncHandler = require('express-async-handler');
const ErrorResponse = require('../utils/errorResponse');

exports.registerUser = asyncHandler(async (req, res, next) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return next(new ErrorResponse('Please provide name, email and password', 400));
    }

    const userMatch = await User.findOne({ email });

    if (userMatch) {
        return next(new ErrorResponse('User with that email already exists', 400));
    }

    const user = await User.create(req.body);

    res.status(201).json({ success: true, data: user });
})

exports.loginUser = asyncHandler(async (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return next(new ErrorResponse('Please provide an email and password', 400));
    }

    const user = await User.findOne({ email }).select("+password");

    if (!user) {
        return next(new ErrorResponse('Invalid credentials', 401));
    }

    const isMatch = await user.matchPassword(password);

    if (!isMatch) {
        return next(new ErrorResponse('Invalid credentials', 401));
    }

    const token = user.getSignedJwtToken();

    res.status(200).json({ success: true, token });
})
