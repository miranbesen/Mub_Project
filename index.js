const express = require('express');
const mongoose = require('mongoose');
const homeRoute = require('./routes/home');
const bodyParser = require('body-parser');


const app = express();


const port = 3000;

mongoose.connect('mongodb://127.0.0.1:27017/nodejs_Db', { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', () => console.log("something went wrong to connect to database"));

db.once('open', () => {
  console.log("DB connection has been made successfully");
});

//middleware
app.set('view engine', 'ejs');
app.use(express.static('public'));


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

//routing
app.use('/', homeRoute); //home route'sine ulaşmamızı sağlıyor. Ama url kısmında /home şeklinde belirtirsek burayada aynı sekilde yazmamız gerekli ki url'den ulaşmak istedigimiz yere ulasalım.

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})