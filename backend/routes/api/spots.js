const express = require('express');
const asyncHandler = require('express-async-handler');

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { Spot } = require('../../db/models');

const router = express.Router();

/* GET All Listings ??? */
router.get('/', asyncHandler(async (req, res) => {
    const spots = await Spot.findAll();
    return res.json(spots);
}))

/* GET EACH LISTING BY ID */
// router.get("/:spotId", asyncHandler(async (req, res) => {

// }))

/* GET CREATE A LISTING */


/* POST CREATE A LISTING */


/* PUT UPDATE A LISTING */


/** DELETE A LISTING */


module.exports = router;
