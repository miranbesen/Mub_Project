const express = require('express');
const router = express.Router();
const hoca = require('../models/Hoca');
const ogrenci = require('../models/Ogrenci');
const ozelDers = require('../models/OzelDers');


router.get('/', function (req, res, next) {

  const hocaPromise = new Promise((resolve, reject) => {
    hoca.find({}, function (error, data) {
      error ? reject(data) : resolve(data);
    });
  });


  const ogrenciPromise = new Promise((resolve, reject) => {
    ogrenci.find({}, function (error, data) {
      error ? reject(data) : resolve(data);
    });
  })

  const ozelDersPromise = new Promise((resolve, reject) => {
    ozelDers.find({}, function (error, data) {
      error ? reject(data) : resolve(data);
    });
  });

  Promise.all([
    hocaPromise,
    ogrenciPromise,
    ozelDersPromise
  ]).then(([
    hoca,
    ogrenci,
    ozelDers
  ]) => {
    res.render('home', {
      hoca,
      ogrenci,
      ozelDers
    });
  });
});

router.post('/addHoca', (req, res, next) => {
  const hocaAd = req.body.hoca_ad;
  const hocaSoyad = req.body.hoca_soyad;
  const hocaBrans = req.body.hoca_brans;


  const yeniHoca = new hoca({
    Ad: hocaAd,
    Soyad: hocaSoyad,
    Brans: hocaBrans
  });
  yeniHoca.save((err) => {
    if (err) {
      console.log("Something went wrong to save data to db");
    } else {
      console.log("Data is recorded successfully");
      res.redirect('/');
    }
  });
});

router.post('/addOgrenci', (req, res, next) => {

  const ogrenciAd = req.body.ogrenci_ad;
  const ogrenciSoyad = req.body.ogrenci_soyad;


  const yeniOgrenci = new ogrenci({
    Ad: ogrenciAd,
    Soyad: ogrenciSoyad
  });
  yeniOgrenci.save((err) => {
    if (err) {
      console.log("Something went wrong to save data to db");
    } else {
      console.log("Data is recorded successfully");
      res.redirect('/');
    }
  });
});

router.post('/addOzelDers', (req, res, next) => {
  const ozelDersHocaAd = req.body.drpDwnhocaAd;
  const ozelDersOgrenciAd = req.body.drpDwnOgrenciAd;


  const yeniOzelDers = new ozelDers({
    HocaAd: ozelDersHocaAd,
    OgrenciAd: ozelDersOgrenciAd
  });
  yeniOzelDers.save((err) => {
    if (err) {
      console.log("Something went wrong to save data to db");
    } else {
      console.log("Data is recorded successfully");
      res.redirect('/');
    }
  });
});

router.get('/delete/:id', (req, res, next) => {
  ozelDers.findByIdAndDelete({ _id: req.params.id }, (err, docs) => {
    if (err) {
      console.log("something went wrong to delete data");
      next(err);
    } else {
      console.log("deleted succesfully");
      res.redirect('/');
    }
  })
});

module.exports = router;