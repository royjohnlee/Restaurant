var express = require('express');
var router = express.Router();
var restaurantCtrl = require('../controllers/restaurants');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// All routes starts with '/restaurants'
router.get('/', restaurantCtrl.index)

// GET /restaurants/new
router.get('/new', ensureLoggedIn, restaurantCtrl.new)

router.get('/:id', restaurantCtrl.show)

// POST /restaurants
router.post('/', restaurantCtrl.create)

module.exports = router;
