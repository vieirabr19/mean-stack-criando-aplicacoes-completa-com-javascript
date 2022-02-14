var express = require('express');
var app = express();
var consign = require('consign');

consign({cwd: 'app'})
  .include('api')
  .then('routes')
  .into(app);

app.use(express.static('./public'));

module.exports = app;
