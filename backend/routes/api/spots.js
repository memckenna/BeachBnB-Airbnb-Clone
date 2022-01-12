const express = require('express');
const asyncHandler = require('express-async-handler');

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { requireAuth } = require('../../utils/auth')
const db = require("../../db/models")
const { Spot } = require('../../db/models');
const { Image } = require('../../db/models');
const router = express.Router();

/* GET All Listings ??? */
router.get('/', asyncHandler(async (req, res) => {
    const spots = await Spot.findAll({
        include: [Image]
    });
    // console.log("SPOTS ROUTE!!!!!", spots)
    return res.json(spots);
}))

/* GET EACH LISTING BY ID */
router.get("/:id", asyncHandler(async (req, res) => {
    const spotById = await Spot.findByPk(req.params.id, {
        include: [Image]
    });

    return res.json(spotById)
}))


const newSpotValidators = [
    check("name")
        .exists({ checkFalsy: true })
        .withMessage("Please provide a name for the Listing")
        .isLength({ max: 256 })
        .withMessage("Name must not be more than 256 characters long"),
    check("address")
        .exists({ checkFalsy: true })
        .withMessage("Please provide an Address for the Listing")
        .isLength({ max: 256 })
        .withMessage("Address must not be more than 256 characters long"),
    check("city")
        .exists({ checkFalsy: true })
        .withMessage("Please provide a City for the Listing")
        .isLength({ max: 100 })
        .withMessage("City must not be more than 100 characters long"),
    check("state")
        .exists({ checkFalsy: true })
        .withMessage("Please provide a State for the Listing")
        .isLength({ max: 100 })
        .withMessage("State must not be more than 100 characters long"),
    check("country")
        .exists({ checkFalsy: true })
        .withMessage("Please provide a Country for the Listing")
        .isLength({ max: 100 })
        .withMessage("Country must not be more than 100 characters long"),
    check("zipcode")
        .exists({ checkFalsy: true })
        .withMessage("Please provide a Zip Code for the Listing"),
    check("price")
        .exists({ checkFalsy: true })
        .withMessage("Please provide a value for price"),
    handleValidationErrors,
];

/* GET CREATE A LISTING */
// router.get("/new", asyncHandler(async (req, res) => {
//     const spot = await Spot.create(req.body);

//     return res.json(spot)
// }))

/* POST CREATE A LISTING */
router.post("/new", newSpotValidators, requireAuth, asyncHandler(async (req, res, next) => {
    const { userId } = req.user.id;
    const { address, city, state, country, zipcode, name, price, image } = req.body;

    const newSpot = await Spot.create({ address, city, state, country, zipcode, name, price, image, userId });

    if (!newSpot) {
        const err = new Error('New Listing failed');
        err.status = 401;
        err.title = 'New Listing failed';
        err.errors = ['The provided credentials were invalid.'];
        return next(err);
    }

    return res.json(newSpot)
}))


/* PUT UPDATE A LISTING */


/** DELETE A LISTING */


module.exports = router;
