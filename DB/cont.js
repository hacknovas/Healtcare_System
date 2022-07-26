const mongoose = require('mongoose');

const info = mongoose.Schema({
    Name: String,
    Email: String,
    Phone: Number,
    msg: String
});

const Detail = new mongoose.model("ContactInfo", info);

module.exports = Detail;