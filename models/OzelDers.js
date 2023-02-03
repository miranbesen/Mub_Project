const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let OzelDersSchema = new Schema({
    HocaAd: {
        type: String,
        required: true
    },
    OgrenciAd: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('OzelDers', OzelDersSchema);