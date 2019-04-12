const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let categories = new Schema({
    id: Schema.Types.ObjectId,
    name: { type: String, required: true, max: 100, trim: true },
    count: { type: Number, default: 0 }
});

let business = new Schema({
    id: Schema.Types.ObjectId,
    name: { type: String, required: true, max: 100, trim: true },
    imgUrl: { type: String, required: true },
    address: {
        addressLine1: { type: String, required: true },
        addressLine2: { type: String },
        city: { type: String, required: true },
        state: { type: String, required: true },
        zipcode: { type: String, required: true }
    },
    phone: { type: Number },
    description: { type: String, required: true },
    category: {
        name:{ type: String, required: true },
        id: { type: String, required: true },
    },
    openingHours: [{
        day: { type: String, required: true },
        from: { type: String, required: true },
        to: { type: String, required: true }
    }],
    locationName: { type: String, required: true },
    email: { type: String },
    gallery: [String],
    tags: [String]
});

module.exports = {
    Categories: mongoose.model('Categories', categories),
    Business: mongoose.model('Business', business)
}

