const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
    name: String,
    description: String,
    address: String,
    phoneNumber: Number
}, {
    timestamps: true
});

module.exports = mongoose.model('Restaurant', restaurantSchema)
