'use strict';

const mongoose = require('mongoose');

module.exports = {
    initMongoose: initMongoose

}
function initMongoose() {
    mongoose.connect('mongodb://127.0.0.1:27017/aries', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    });

    const db = mongoose.connection;

    db.on('error', function(err) {
        console.log('err',err);
    })

    db.once('open', function() {
        console.log('connected');
    })

    process.on('SIGINT', cleanup);
}

function cleanup() {
    mongoose.connection.close(function() {
        process.exit();
    })

}
