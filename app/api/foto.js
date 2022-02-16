var api = {};

var GENERATE_ID = 2;

var photos = [
  {_id: 1, titulo: 'Photo 1', url: 'https://www.infoescola.com/wp-content/uploads/2017/04/leao-126767138-1000x673.jpg'},
  {_id: 2, titulo: 'Photo 2', url: 'https://www.infoescola.com/wp-content/uploads/2017/04/leao-413856229-1000x667.jpg'}
];

api.lista = function(req, res) {
  res.json(photos);
}

api.fotoPorId = function(req, res){
  var foto = photos.find(function(foto){
    return foto._id == req.params.id;
  });

  res.json(foto);
}

api.removePorId = function(req, res){
  photos = photos.filter(function(foto){
    return foto._id != req.params.id;
  });

  res.sendStatus(204);
}

api.adiciona = function(req, res){
  const foto = req.body;
  foto._id = ++GENERATE_ID;
  photos.push(foto);
  res.json(foto);
}

api.atualiza = function(req, res){
  var foto = req.body;
  var fotoId = req.params.id;
  var indice = photos.findIndex(function(foto){
    return foto._id == fotoId;
  });

  photos[indice] = foto;
  res.sendStatus(200);
}

module.exports = api;