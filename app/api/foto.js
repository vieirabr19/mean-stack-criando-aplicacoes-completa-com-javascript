var mongoose = require('mongoose');
var model = mongoose.model('Foto');

module.exports = function(app){
  var api = {};
  
  api.lista = function(req, res) {
    model
      .find({})
      .then(function(fotos) {
        res.json(fotos);
      }, function(error) {
        console.log('Erro',error);
        res.status(500).json(error);
      });
  }
  
  api.fotoPorId = function(req, res){
    model
      .findById(req.params.id)
      .then(function(foto) {
        if(!foto) throw new Error('Foto não encontrada.');
        res.json(foto);
      }, function(error){
        console.log(error);
        res.status(404).json(error);
      });
  }
  
  api.removePorId = function(req, res){
    model
      .remove({ _id: req.params.id})
      .then(function(){
        res.sendStatus(204);
      }, function(){
        console.log(error);
        res.status(500).json(error);
      });
  }
  
  api.adiciona = function(req, res){
    model
      .create(req.body)
      .then(function(foto){
        res.json(foto)
      }, function(error){
        console.log(error);
        res.status(500).json(error);
      });
  }
  
  api.atualiza = function(req, res){
    model
      .findByIdAndUpdate(req.params.id, req.body)
      .then(function(foto){
        res.json(foto);
      }, function(error){
        console.log(error);
        res.status(500).json(error);
      });
  }

  return api;
}
