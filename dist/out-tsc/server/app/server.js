import 'zone.js/dist/zone-node';
import 'reflect-metadata';
import { enableProdMode } from '@angular/core';
import { ngExpressEngine } from '@nguniversal/express-engine';
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';
import * as cors from 'cors';
import * as compression from 'compression';
var server = require('./local-server');
var express = server.express;
export var app = server.app;
enableProdMode();
app.use(compression());
app.use(cors());
var domino = require('domino');
var fs = require('fs');
var path = require('path');
var template = fs.readFileSync(path.join(process.cwd(), 'dist', 'browser', 'index.html')).toString();
var win = domino.createWindow(template);
global['window'] = win;
global['document'] = win.document;
var _a = require('../../dist/server/main'), AppServerModuleNgFactory = _a.AppServerModuleNgFactory, LAZY_MODULE_MAP = _a.LAZY_MODULE_MAP;
app.engine('html', ngExpressEngine({
    bootstrap: AppServerModuleNgFactory,
    providers: [
        provideModuleMap(LAZY_MODULE_MAP)
    ]
}));
app.set('view engine', 'html');
app.set('views', './dist/browser');
app.get('/redirect/**', function (req, res) {
    var location = req.url.substring(10);
    res.redirect(301, location);
});
app.get('*.*', express.static('./dist/browser', {
    maxAge: '1y'
}));
app.get('/*', function (req, res) {
    res.render('index', { req: req, res: res }, function (err, html) {
        if (html) {
            res.send(html);
        }
        else {
            console.error(err);
            res.send(err);
        }
    });
});
//# sourceMappingURL=server.js.map