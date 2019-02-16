const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let categories = new Schema({
    id: Schema.Types.ObjectId,
    name: { type: String, required: true, max: 100, trim: true },
    detailUrl: { type: String },
    count: { type: Number, default: 0 },
    imgUrl: { type: String }
});

let buisness = new Schema({
    id: Schema.Types.ObjectId,
    name: { type: String, required: true, max: 100, trim: true },
    imgUrl: { type: String, required: true },
    address: {
        addressLine1: { type: String, required: true },
        addressLine2: { type: String, required: true },
        city: { type: String, required: true },
        state: { type: String, required: true },
        zipcode: { type: String, required: true }
    },
    phone: { type: Number },
    description: { type: String, required: true },
    category: { type: String, required: true },
    openingHours: {
        from: { type: String, required: true },
        to: { type: String, required: true }
    }
});

// Export the model
module.exports = mongoose.model('Categories', categories);

