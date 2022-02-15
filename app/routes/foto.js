module.exports = function(app){
  var api = app.api.foto;

  app.get('/v1/fotos', api.lista);
  app.route('/v1/fotos/:id')
   .get(api.fotoPorId)
   .delete(api.removePorId);
}