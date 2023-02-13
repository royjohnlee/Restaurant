const Restaurant = require('../models/restaurant')
module.exports = {
    index,
    new: newRestaurant,
    create
};
function index(req, res) {
    Restaurant.find({}, function (error, restaurants) {
        res.render('restaurants/index', { restaurants })
    });

}

function create(req, res) {
    const restaurant = new Restaurant(req.body);
    restaurant.save(function (error) {
        if (error) {
            return res.redirect('/restaurants/new')
        }
        console.log(restaurant);
        res.redirect('/restaurants/new')
    })
}

function newRestaurant(req, res) {
    res.render('restaurants/new');
}
