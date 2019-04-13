import 'zone.js/dist/zone-node';
import 'reflect-metadata';
import {enableProdMode} from '@angular/core';
import {ngExpressEngine} from '@nguniversal/express-engine';
import {provideModuleMap} from '@nguniversal/module-map-ngfactory-loader';
enableProdMode();
const server = require('./local-server');
const express = server.express;
export const app = server.app;

const domino = require('domino');
const fs = require('fs');
const path = require('path');
const template = fs.readFileSync(path.join(process.cwd(), 'dist', 'browser', 'index.html')).toString();
const win = domino.createWindow(template);
const MockBrowser = require('mock-browser').mocks.MockBrowser;
const mock = new MockBrowser();
global['navigator'] = mock.getNavigator();
global['window'] = win;
global['document'] = win.document;

const {AppServerModuleNgFactory, LAZY_MODULE_MAP} = require('../../dist/server/main');
app.engine('html', ngExpressEngine({
  bootstrap: AppServerModuleNgFactory,
  providers: [
    provideModuleMap(LAZY_MODULE_MAP)
  ]
}));

app.set('view engine', 'html');
app.set('views', './dist/browser');

app.get('/redirect/**', (req, res) => {
  const location = req.url.substring(10);
  res.redirect(301, location);
});

app.get('*.*', express.static('./dist/browser', {
  maxAge: '1y'
}));
app.get('/*', (req, res) => {
  res.render('index', {req, res}, (err, html) => {
    if (html) {
      res.send(html);
    } else {
      res.send(err);
    }
  });
});
