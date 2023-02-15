const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../controllers/reviews')
const ensureLoggedIn = require('../config/ensureLoggedIn')


// POST /restaurant/:id/reviews
router.post('restaurants/:id/reviews', reviewsCtrl.create)


module.exports = router;
