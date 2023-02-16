const restaurant = require("../models/restaurant");
const Restaurant = require("../models/restaurant")

module.exports = {
    create,
    delete: deleteReview,
}


function create(req, res) {
    req.body.user = req.user;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
    console.log(req.body)
    Restaurant.findById(req.params.id, function (err, restaurant) {
        restaurant.reviews.push(req.body);
        restaurant.save(function (err) {
            console.log(err)
            res.redirect(`/restaurants/${restaurant._id}`)
        })
    });
};



function deleteReview(req, res, next) {
    Restaurant.findOne({
        'reviews._id': req.params.id,
        'reviews.user': req.user._id
    }).then(function (restaurant) {
        if (!restaurant) return res.redirect('/restaurants');
        restaurant.reviews.remove(req.params.id);
        restaurant.save().then(function () {
            res.redirect(`/restaurants/${restaurant._id}`);
        }).catch(function (err) {
            return next(err);
        });
    });
}
