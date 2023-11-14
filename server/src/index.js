const express = require('express');
const morgan = require('morgan')
const methodOverride = require('method-override')
const cors = require('cors');
const app = express()
const port = 3001;

var bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const route = require('./config/router/index');


const db = require('./config/db')

// Connect to db
db.connect()

app.use(cors());

route(app);

app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`),
);
