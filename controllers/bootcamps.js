const Bootcamp = require('../models/Bootcamp');
const asyncHandler = require('express-async-handler');
const ErrorResponse = require('../utils/errorResponse');

exports.getBootcamps = asyncHandler(async (req, res, next) => {
    res.status(200).json(res.advancedResults);
})

exports.getBootcamp = asyncHandler(async (req, res, next) => {
    const bootcamp = await Bootcamp.findById(req.params.id).populate({
        path: 'user',
        select: 'name email'
    });

    if (!bootcamp) {
        return next(new ErrorResponse(`Bootcamp with the id ${req.params.id} not found`, 404));
    }

    res.status(200).json({ success: true, data: bootcamp })
})

exports.createBootcamp = asyncHandler(async (req, res, next) => {
    req.body.user = req.user.id;

    const bootcamp = await Bootcamp.create(req.body);

    res.status(201).json({
        success: true,
        data: bootcamp
    })
})

exports.updateBootcamp = asyncHandler(async (req, res, next) => {
    let bootcamp = await Bootcamp.findById(req.params.id);

    if (!bootcamp) {
        return next(new ErrorResponse(`Bootcamp with the id ${req.params.id} not found`, 404));
    }

    bootcamp = await Bootcamp.findOneAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    })

    res.status(200).json({ success: true, data: bootcamp });
})

exports.deleteBootcamp = asyncHandler(async (req, res, next) => {
    const bootcamp = await Bootcamp.findById(req.params.id);

    if (!bootcamp) {
        return next(new ErrorResponse(`Bootcamp with the id ${req.params.id} not found`, 404));
    }

    bootcamp.remove();

    res.status(200).json({ success: true, data: {} });
})
