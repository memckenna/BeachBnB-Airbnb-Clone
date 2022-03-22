const express = require('express');
const asyncHandler = require('express-async-handler');

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const { setTokenCookie, restoreUser, requireAuth } = require('../../utils/auth');
const { Spot, Image, Booking, User } = require('../../db/models');

const router = express.Router();

//Get all bookings by user
router.get('/', requireAuth, asyncHandler( async(req, res) => {
    const bookings = await Booking.findAll({
        include: [
            User,
            Spot,
            {model: Spot, include: [Image, User]}
        ],
        where: {
            userId: req.user.id,
        },

    });
    console.log("BOOKINGS", bookings)

    if(!req.user) {
        const error = new Error("Must log in to access bookings");
        error.status = 401;
        error.title = "Must log in to access bookings";
        error.errors = ["Please log in to access bookings"]
    }

    return res.json(bookings);
}));

//Get a single booking
router.get('/:id(\\d+)', asyncHandler(async (req, res) => {
    const singleBooking = await Booking.findByPk(req.params.id, {
        include: [
            Spot,
            {model: Spot, include: [Image]}
        ]
    });

    return res.json(singleBooking);
}));

//Create a new booking
router.post('/new', asyncHandler(async (req, res) => {
    const createBooking = req.body;

    const { spotId, userId, startDate, endDate } = req.body;

    await Booking.create(createBooking)
    return res.json({createBooking})
}))

//Get a booking to edit
router.get('/:id(\\d+)/edit', asyncHandler(async (req, res) => {
    const bookingId = req.params.id;
    const bookingToEdit = await Booking.findByPk(bookingId);

    return res.json(bookingToEdit);
}));

//Update Booking
router.put('/:id(\\d+)', asyncHandler(async (req, res) => {
    const bookingId = req.params.id;
    const bookingtToUpdate = await Booking.findByPk(bookingId);
    const updateBooking = await bookingtToUpdate.update(req.body);

    return res.json(updateBooking);
}));

//Delete Booking
router.delete('/:id(\\d+)', asyncHandler(async (req, res) => {
    const bookingId = req.params.id;
    const deleteBooking = await Booking.findByPk(bookingId);
    await deleteBooking.destroy();
    return res.json({ deleteBooking })
}))



module.exports = router;
