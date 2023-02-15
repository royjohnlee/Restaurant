const Restaurant = require('../models/restaurant')
module.exports = {
    index,
    show,
    new: newRestaurant,
    create
};

function index(req, res) {
    Restaurant.find({}, function (error, restaurants) {
        res.render('restaurants/index', { title: 'All Restaurants', restaurants })
    });
}

function show(req, res) {
    Restaurant.findById(req.params.id, function (error, restaurant) {
        res.render('restaurants/show', { title: "Information", restaurant })
    })
}

function newRestaurant(req, res) {
    res.render('restaurants/new', { title: 'Add Restaurants' });
}

function create(req, res) {
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    }
    const restaurant = new Restaurant(req.body);
    restaurant.save(function (error) {
        if (error) {
            return res.redirect('/restaurants')
        }
        res.redirect('/restaurants')
    })
}
