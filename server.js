"use strict"

const express = require('express');
const app =  express();
const helperCtrl = require('./app/helpers');
const config = require('./config/index');

require('./config/express').initExpress(app);
require('./config/routes').initRoutes(app);
require('./config/mongoose').initMongoose();
require('./config/handlingErrors').handlingErrors(app);
require('./config/finalRoute').finalRoute(app);


/*app.use('/users', function(req,res, next) {
    console.log('1' + helperCtrl.getCurrentDate());
    next();
});

app.use( function(req,res, next) {
    console.log('2');
    next();
});
*/

/*
app.get('/users', function(req, res, next) {
    res.send('gello');
});
*/


app.listen(config.PORT, function(){
    console.log(`App is running on port ${config.PORT}`);
});