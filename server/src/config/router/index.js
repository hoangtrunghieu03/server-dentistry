const passportRouter = require('./passport');
const userRouter = require('./user');

function route(app) {
    app.use('/', passportRouter);
    app.use('/user', userRouter);
}

module.exports = route;