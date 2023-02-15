const Restaurant = require("../models/restaurant")

module.exports = {
    create
}

function create(req, res) {
    Restaurant.findById(req.params.id, function (err, restaurant) {
        req.body.user = req.user.id;
        req.body.userName = req.user.name;
        req.body.userAvatar = req.user.name
        restaurant.reviews.push(req.body);
        restaurant.save(function (err) {
            res.redirect(`/restaurant/${restaurant._id}`)
        })
    });
};
