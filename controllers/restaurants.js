const Restaurant = require('../models/restaurant')
module.exports = {
    index,
    show,
    new: newRestaurant,
    create
};


function show(req, res) {
    Restaurant.findById(req.params.id, function (error, restaurant) {
        res.render('restaurants/show', { title: "Information", restaurant })
    })
}
function index(req, res) {
    Restaurant.find({}, function (error, restaurants) {
        res.render('restaurants/index', { title: 'All Restaurants', restaurants })
    });
}

function create(req, res) {
    const restaurant = new Restaurant(req.body);
    restaurant.save(function (error) {
        if (error) {
            return res.redirect('/restaurants')
        }
        console.log(restaurant);
        res.redirect('/restaurants')
    })
}

function newRestaurant(req, res) {
    res.render('restaurants/new', { title: 'Add Restaurants' });
}
