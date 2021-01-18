'use strict';

module.exports = {
    handlingErrors
}

function handlingErrors(app) {
    app.use(function (err, req, res, next) {
        return res.status(err.statusCode || 400).json({
            status: 'error',
            message: err && err.message || 'default error msg'
        });

    });
}