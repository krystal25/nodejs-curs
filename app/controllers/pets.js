"use strict";

const Pet = require('../models/pets');

module.exports = {
    createPet,
    getPets,
    getPetById,
};

function createPet(req, res, next) {
    const pet = new Pet(req.body);
    pet.save(function(err,result) {
        if (err) {
            return res.status(404).json(err);
        }
        req.resources.pets = result;
        return next();
    });
}

function getPetById(req, res, next) {
    const { petId } = req.params;
    Pet.findById({_id: petId}, function (err,result) {
            if (err) {
                return res.status(404).json(err);
            }
            req.resources.pets = result;
            return next();
    })
}

function getPets(req, res, next) {
    Pet
        .find()
        .populate('userId', 'email')
        .exec(function (err,result) {
        if (err) {
            return res.status(404).json(err);
        }
        req.resources.pets = result;
        return next();
    })
}
