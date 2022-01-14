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
    check("bedrooms")
        .exists({ checkFalsy: true })
        .withMessage("Please provide a count of Bedrooms for the Listing"),
    check("baths")
        .exists({ checkFalsy: true })
        .withMessage("Please provide a count of Bathsfor the Listing"),
    check("price")
        .exists({ checkFalsy: true })
        .withMessage("Please provide a value for Price"),
    handleValidationErrors,
];


/* POST CREATE A LISTING */
router.post("/new", newSpotValidators, requireAuth, asyncHandler(async (req, res, next) => {
    const userId = req.user.id;
    const { address, city, state, country, zipcode, name, bedrooms, baths, price, image } = req.body;

    const newSpot = await Spot.create({ address, city, state, country, zipcode, name, bedrooms, baths, price, image, userId });

    if (!newSpot) {
        const err = new Error('New Listing failed');
        err.status = 401;
        err.title = 'New Listing failed';
        err.errors = ['The provided credentials were invalid.'];
        return next(err);
    } else {
        // const image = await Image.create({spotId:newSpot.id, url:req.body.url})
        // const image = await Image.create({spotId:newSpot.id, url:req.body.image})
        // newSpot.Images = [image]
        const newImg = await Image.create({spotId : newSpot.id, url: req.body.image})
        newSpot.dataValues.Images = [newImg]
    }

    return res.json(newSpot)
}))


/* PUT UPDATE A LISTING */
router.put("/:id/edit", newSpotValidators, requireAuth, asyncHandler(async (req, res, next) => {
    const spotId = req.params.id
    const userId = parseInt(req.user.id, 10)

    const { address, city, state, country, zipcode, name, bedrooms, baths, price, image } = req.body;
    const currentSpot = await Spot.findByPk(spotId);

    const updateSpot = await currentSpot.update({address, city, state, country, zipcode, name, bedrooms, baths, price, image});

    if (!updateSpot) {
        const err = new Error('Updating Listing failed');
        err.status = 401;
        err.title = 'Updating Listing failed';
        err.errors = ['The provided credentials were invalid.'];
        return next(err);
    } else {
        // const updateImg = await Image.update({spotId : updateSpot.id, url: req.body.image})
        const updateImg = await Image.update({id : updateSpot.id, url: req.body.image}, {
            where: {
                id: req.params.id
            }
        })
        updateSpot.dataValues.Images = [updateImg]
    }
    return res.json(updateSpot)
}))


/** DELETE A LISTING */
router.delete("/:id", asyncHandler(async (req, res, next) => {
    const { userId } = req.body;
    // const spotId = parseInt(req.params.id, 10);
    const id = req.params.id;
    // const currentSpot = await Spot.findByPk(id);
    const currentSpot = await Spot.findByPk(req.params.id, {
        include: [Image]
    });

    if (!currentSpot) {
        const err = new Error('Deleteing this spot failed');
        err.status = 401;
        err.title = 'Deleteing this spot failed';
        next(err);
    }

    const deleteSpot = await currentSpot.destroy();

    return res.json({})
}))


module.exports = router;
