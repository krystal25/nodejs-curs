'use strict';

module.exports = {
    finalRoute
}

function finalRoute(app) {
    app.all('*', function (req, res, next) {
        return res.status(404).json({
            'status': 'fail',
            'message': `cannot find ${req.url} on this server`
        })
    })
}