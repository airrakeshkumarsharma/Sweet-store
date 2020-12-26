const mongoose = require("mongoose")

const schema = new mongoose.Schema({ 
    name: {
        type: String,
        required: true
    },
    whyFamous: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
}, { timestamps: true });

exports.sweetModel = mongoose.model('sweet', schema);