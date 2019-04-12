const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let user = new Schema({
    id: Schema.Types.ObjectId,
    name: { type: String, required: true, trim: true },
    imgUrl: { type: String, required: true },
    address: {
        addressLine1: { type: String, required: true },
        addressLine2: { type: String },
        city: { type: String, required: true },
        state: { type: String, required: true },
        zipcode: { type: String, required: true }
    },
    phone: { type: Number },
    email: { type: String },
    isAdmin: Boolean
});

module.exports = mongoose.model('User', user)

