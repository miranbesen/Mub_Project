const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let HocaSchema = new Schema({

    Ad: {
        type: String,
        required: true
    },
    Soyad: {
        type: String,
        required: true
    },
    Brans: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Hoca', HocaSchema);