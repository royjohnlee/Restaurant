const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    address: { type: String, required: true },
    phoneNumber: { type: Number },
    ethnic: {
        type: String,
        enum: ['African', 'Asian', 'Australian', 'European', 'North American', 'South American']
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Restaurant', restaurantSchema)
