"use strict"

module.exports = {
    getCurrentDate: getCurrentDate,
    responseToJson
}

function getCurrentDate() {
    return new Date();
}

function responseToJson(propItem) {
    return function(req, res, next) {
        res.json(req.resources[propItem]);
    }
}