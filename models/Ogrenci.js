const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let OgrenciSchema = new Schema({

    Ad: {
        type: String,
        required: true
    },
    Soyad: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Ogrenci', OgrenciSchema);