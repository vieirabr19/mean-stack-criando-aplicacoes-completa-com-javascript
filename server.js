var http = require('http');
var app = require('./config/express');

require('./config/database')('localhost/mean-stack-criando-aplicacoes-completa-com-javascript');

http.createServer(app).listen(3000, function() {
  console.log('Servidor iniciado na porta 3000');
});

// http.createServer(function(req, res){
//   var indice = req.url.indexOf('=');
//   var paramentro = req.url.substr(indice + 1);
//   console.log(paramentro);
// }).listen(3000, function() {
//   console.log('Servidor iniciado');
// });
