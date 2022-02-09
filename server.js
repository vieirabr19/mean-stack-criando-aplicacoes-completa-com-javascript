var http = require('http');
var app = require('./config/express');

http.createServer(app).listen(3000, function() {
  console.log('Servidor iniciado');
});

// http.createServer(function(req, res){
//   var indice = req.url.indexOf('=');
//   var paramentro = req.url.substr(indice + 1);
//   console.log(paramentro);
// }).listen(3000, function() {
//   console.log('Servidor iniciado');
// });
