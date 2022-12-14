const mongoose = require("mongoose");

const purchaserSchema = mongoose.Schema({
    document: {
    type: Number,
    required: true
    },
    phone: {
    type: Number,
    required: true
    },
    email:{
    type: String,
    required: true
    }
});

module.exports = mongoose.model('purchaser', purchaserSchema);