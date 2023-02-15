const Restaurant = require("../models/restaurant")

module.exports = {
    create,
    delete: deleteReview
}

function create(req, res) {
    Restaurant.findById(req.params.id, function (err, restaurant) {
        req.body.user = req.user._id;
        req.body.userName = req.user.name;
        req.body.userAvatar = req.user.avatar;
        restaurant.reviews.push(req.body);
        restaurant.save(function (err) {
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
