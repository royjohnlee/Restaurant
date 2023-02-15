const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;
const reviewSchema = new Schema({
    content: {
        type: String,
        required: true
    }, rating: {
        type: Number,
        min: 1,
        max: 5,
        default: 1
    }
}, {
    timestamps: true
});

const restaurantSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    address: { type: String, required: true },
    phoneNumber: { type: Number },
    ethnic: {
        type: String,
        enum: ['African', 'Asian', 'Australian', 'European', 'North American', 'South American']
    },
    reviews: [reviewSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('Restaurant', restaurantSchema)
