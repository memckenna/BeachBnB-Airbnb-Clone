// backend/routes/api/index.js
const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const spotsRouter = require('./spots.js')
const bookingsRouter = require('./bookings.js')
const reviewsRouter = require('./reviews.js')
// const imagesRouter = require('./images.js')


router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/spots', spotsRouter);
router.use('/bookings', bookingsRouter);
router.use('/reviews', reviewsRouter)
// router.use('/images', imagesRouter)




module.exports = router;
