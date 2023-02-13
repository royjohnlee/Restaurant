module.exports = {
    new: newRestaurant
};

function newRestaurant(req, res) {
    res.render('restaurants/new');
}
