var express = require('express');
var bodyParser = require('body-parser');
var category = require('./routes/category.routes');
var app = express();
var mongoose = require('mongoose');
var dev_db_url = 'mongodb://admin:eazylog1234@ds123465.mlab.com:23465/eazylog_db';
var mongoDB = process.env.MONGODB_URI || dev_db_url;
var db_options = {
    autoReconnect: true,
    poolSize: 20,
    socketTimeoutMS: 480000,
    keepAlive: 300000,
    keepAliveInitialDelay: 300000,
    connectTimeoutMS: 30000,
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 1000,
    useNewUrlParser: true
};
mongoose.connect(mongoDB, db_options);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/category', category);
var server = {
    express: express,
    app: app
};
module.exports = server;
//# sourceMappingURL=local-server.js.map