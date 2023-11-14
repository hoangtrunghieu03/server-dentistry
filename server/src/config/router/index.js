const passportRouter = require('./passport');

function route(app) {
    app.use('/', passportRouter);
}

module.exports = route;