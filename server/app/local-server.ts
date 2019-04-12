require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const category = require('./routes/category.routes');
const business = require('./routes/business.routes');
const app = express();
const cors = require('cors');
const compression =  require('compression');
// var decoder = require('./decoder');

const mongoose = require('mongoose');
let dev_db_url = 'mongodb://admin:eazylog1234@ds123465.mlab.com:23465/eazylog_db';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
const db_options = {
	autoReconnect:true,

	poolSize: 20,
	socketTimeoutMS: 480000,
	keepAlive: 300000,

	keepAliveInitialDelay : 300000,
	connectTimeoutMS: 30000,
	reconnectTries: Number.MAX_VALUE,
	reconnectInterval: 1000,
	useNewUrlParser: true
};
mongoose.connect(mongoDB, db_options);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(compression());
app.use(cors());
// app.use(decoder.token);
app.use('/api/v1/categories', category);
app.use('/api/v1/business', business);

const server = {
    express: express,
    app: app
};
module.exports = server;