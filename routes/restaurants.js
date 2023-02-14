var express = require('express');
var router = express.Router();
var restaurantCtrl = require('../controllers/restaurants');

// All routes starts with '/restaurants'
router.get('/', restaurantCtrl.index)

// GET /restaurants/new
router.get('/new', restaurantCtrl.new)

router.get('/:id', restaurantCtrl.show)

// POST /restaurants
router.post('/', restaurantCtrl.create)

module.exports = router;
