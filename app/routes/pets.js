"use strict";

const express = require('express');
const router = express.Router();
const petCtrl = require('../controllers/pets');
const helperCtrl = require('../helpers');

router.get('/pets',
    petCtrl.getPets,
    helperCtrl.responseToJson('pets')
);

router.get('/pets/:petId',
    petCtrl.getPetById,
    helperCtrl.responseToJson('pets')
);

router.post('/pets',
    petCtrl.createPet,
    helperCtrl.responseToJson('pets')
);

module.exports = router;
