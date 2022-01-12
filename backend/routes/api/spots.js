const express = require('express');
const asyncHandler = require('express-async-handler');

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
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

    // const { id } = req.body;
    // const spotById = await Spot.findByPk(id);
    // return res.json(spotById)
}))

/* GET CREATE A LISTING */
// router.get("", asyncHandler(async (req, res) => {
//     const response = await
// }))


/* POST CREATE A LISTING */


/* PUT UPDATE A LISTING */


/** DELETE A LISTING */


module.exports = router;
