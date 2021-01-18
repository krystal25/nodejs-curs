'use strict';

const mongoose = require('mongoose');
const Schema =  mongoose.Schema;
const ObjectId = mongoose.ObjectId;
const { userModel } = require('../constants');

const petSchema = new Schema({
    createdAt: Number,
    updatedAt: Number,
    type: {
        type: String,
        required: true,
        unique: false
    },
    name: {
        type: String,
        required: true,
        unique: false
    },
    userId: {
        type: ObjectId,
        ref: userModel, // 'user'
        required: true
    },
    reviews: [
        {
            description: {
                type: String
            },
            rate: {
                type: Number
            }

        }

    ]

}, {
    timestamps: {currentTime: () => new Date().getTime()}
}
    );

module.exports =  mongoose.model('pet', petSchema, 'pets');