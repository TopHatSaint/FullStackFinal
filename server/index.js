// REQUIRE DEPENDENCIES
// ============================================================
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const massive = require('massive');
const passport = require('passport');
const auth0 = require('passport-auth0');
const config = require('./config.js');

 // CONFIG
 // ============================================================

 // INITILIZE APP
 // ============================================================
 var app = module.exports = express();
 // INITILIZE DEPENDENCIES
 // ============================================================
 app.use(express.static(__dirname + './../public'));
 app.use(bodyParser.json());
 // MASSIVE SETUP
 // ============================================================
 var massiveUri = config.MASSIVE_URI;
 var massiveServer = massive.connectSync({
   connectionString: massiveUri
 });
 app.set('db', massiveServer);
 var db = app.get('db');
 // CONTROLLERS
 // ============================================================
 var tableController = require('./controllers/tableController');
 // ENDPOINTS
 // ============================================================
 // TABLE ENDPOINTS
 // app.get('/api/table', tableController.read);
 // app.get('/api/table/:id', tableController.findTable)
 // app.post('/api/table', tableController.create);
 // app.put('/api/table/:id', tableController.update);
 // app.delete('/api/table/:id', tableController.delete);
 // LISTEN
 // ============================================================
 var port = config.PORT;
 app.listen(port, function() {
   console.log('listening on port ', port);
 });
