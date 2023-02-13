var express = require('express');
var router = express.Router();
var restaurantCtrl = require('../controllers/restaurants');

// All routes starts with '/restaurant'
router.get('/', restaurantCtrl.index)

// GET /restaurants/new
router.get('/new', restaurantCtrl.new)
// POST /restaurant
router.get('/', restaurantCtrl.create)

module.exports = router;
