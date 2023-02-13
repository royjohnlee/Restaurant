var express = require('express');
var router = express.Router();
var restaurantCtrl = require('../controllers/restaurants');

// All routes starts with '/restaurant'

// GET /restaurants/new
router.get('/new', restaurantCtrl.new)

module.exports = router;
