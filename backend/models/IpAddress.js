const mongoose = require('mongoose');

const ipAddressSchema = new mongoose.Schema({
    ip: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now - (new Date().getTimezoneOffset() * 60000),
    },
});

module.exports = mongoose.model('IpAddress', ipAddressSchema);
