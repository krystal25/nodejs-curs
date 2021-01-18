'use strict';

const path = require('path');

module.exports = {
    initRoutes: initRoutes
};

function initRoutes(app) {
    const routesPath = path.join(__dirname,'../app/routes');
    const routes = ['users', 'pets'];

    routes.forEach(function(route) {
        const finalPath = `${routesPath}/${route}`;
        console.log(finalPath);
        app.use(require(finalPath));
    })
}