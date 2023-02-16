var express = require('express');
var router = express.Router();
var restaurantCtrl = require('../controllers/restaurants');
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.get('/', restaurantCtrl.index)

router.get('/new', ensureLoggedIn, restaurantCtrl.new)

router.get('/:id', restaurantCtrl.show)

router.post('/', restaurantCtrl.create)

router.get('/:id/edit', ensureLoggedIn, restaurantCtrl.edit)

router.put('/:id', ensureLoggedIn, restaurantCtrl.update);


module.exports = router;
