module.exports = function (app) {
  var mongoose = require('mongoose');
  var model = mongoose.model('Usuario');
  var jwt = require('jsonwebtoken');
  var api = {};

  api.autentica = function (req, res) {
    console.log('autentica', req.body);
    model
      .find({
        login: req.body.login,
        senha: req.body.senha
      })
      .then(function (usuario) {
        if (!usuario) {
          console.log('Login ou senha inválidos');
          res.sendStatus(401);
        } else {
          var token = jwt.sign({login: usuario.login}, app.get('secret'), {
            expiresIn: 84600 // valor em segundo, aqui temos um total de 24 horas
          });

          console.log('Autenticado: token adicionado na resposta');
          res.set('x-access-token', token); // adicionando token no cabeçalho de resposta
          res.end(); // enviando a resposta
        }
      }, function (error) {
        console.log('Login ou senha inválidos');
        res.sendStatus(401);
      });
  };

  api.verificaToken = function (req, res, next) {
    var token = req.headers['x-access-token']; // busca o token no header da requisição

    if(token) {
      console.log('Verificando token...');
      jwt.verify(token, app.get('secret'), function (err, decoded){
        if(err) {
          console.log('Token rejeitado');
          res.sendStatus(401);
        }else{
          console.log('Token aceito');
          // guardou o valor decodificado do token na requisição. No caso, o login do usuário.
          req.usuario = decoded;
          next();
        }
      });
    }else{
      console.log('Token não foi enviado');
      res.sendStatus(401);
    }
  };

  return api;
}