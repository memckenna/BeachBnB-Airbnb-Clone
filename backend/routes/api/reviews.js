const express = require('express');
const asyncHandler = require('express-async-handler');

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const { setTokenCookie, restoreUser, requireAuth } = require('../../utils/auth');
const { Spot, Image, Booking, User, Review } = require('../../db/models');

const router = express.Router();

//GET ALL REVIEWS
router.get('/', asyncHandler(async(req, res) => {
    const reviews = await Review.findAll({
        include: [
            User,
            Spot
        ],
        // where: {
        //     userId: req.user.id,
        // },
    });

    if(!req.user) {
        const error = new Error("Must log in to access bookings");
        error.status = 401;
        error.title = "Must log in to access bookings";
        error.errors = ["Please log in to access bookings"]
    }

    return res.json(reviews)
}));

//GET A SINGLE REVIEW
router.get('/:id(\\d+)', asyncHandler(async(req, res) => {
    const singleReview = await Review.findByPk(req.params.id, {
        include: [
            Spot,
            User
        ]
    });

    return res.json(singleReview)
}));

//CREATE NEW REVIEW
router.post('/new', asyncHandler(async(req, res) => {
    const createReview = req.body;
    const { userId, spotId, review } = req.body;

    const newReview = await Review.create(createReview)
    return res.json(newReview)
}));

//GET A REVIEW TO EDIT
router.get('/:id(\\d+)/edit', asyncHandler( async(req, res) => {
    const reviewId = req.params.id;
    const reviewToEdit = await Review.findByPk(reviewId);

    return res.json(reviewToEdit);
}));

//EDIT A REVIEW
router.put('/:id(\\d+)', asyncHandler( async(req, res) => {
    const reviewId = req.params.id;
    const reviewToUpdate = await Review.findByPk(reviewId);
    const updateReview = await reviewToUpdate.update(req.body);

    return res.json(updateReview)
}))

//DELETE A REVIEW
router.delete('/:id(\\d+)', asyncHandler( async(req, res) => {
    const reviewId = req.params.id;
    const deleteReview = await Review.findByPk(reviewId);
    await deleteReview.destroy();
    return res.json({ deleteReview })
}))


module.exports = router;
