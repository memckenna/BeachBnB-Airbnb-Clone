// const express = require('express');
// const asyncHandler = require('express-async-handler');

// const { check } = require('express-validator');
// const { handleValidationErrors } = require('../../utils/validation');

// const { setTokenCookie, restoreUser, requireAuth } = require('../../utils/auth');
// const { Spot, Image, Booking, User } = require('../../db/models');

// const router = express.Router();

// // Create Image
// router.post('/', asyncHandler(async (req, res) => {
//     const { url, spotId } = req.body
//     const image = await Image.create({ url, spotId })

//     res.status(201);
//     res.json({ image });
// }))

// // Edit Image
// router.put('/:id(\\d+)', asyncHandler(async (req,res) => {
//     let img = await imgService.getImgByKey(req.body.spotId);
//     if (img){
//         await imgService.updateImg(img, req.body)
//         img = await imgService.getImgByKey(req.body.spotId);
//         res.json( img );
//         res.status(200);
//     }
// }));



// module.exports = router;
