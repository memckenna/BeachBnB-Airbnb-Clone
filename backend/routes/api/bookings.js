const express = require('express');
const asyncHandler = require('express-async-handler');

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const { setTokenCookie, restoreUser, requireAuth } = require('../../utils/auth');
const { Spot, Image, Booking, User } = require('../../db/models');

const router = express.Router();

router.get('/', requireAuth, asyncHandler( async(req, res) => {
    // const spots = await Spot.findAll({
    //     include: [Image],
    // });

    const bookings = await Booking.findAll({
        include: {
            all: true
        },
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

router.get('/:id', asyncHandler(async (req, res) => {
    const singleBooking = await Booking.findByPk(req.params.id, {
        include: [Spot]
    });

    return res.json(singleBooking);
}));





module.exports = router;
