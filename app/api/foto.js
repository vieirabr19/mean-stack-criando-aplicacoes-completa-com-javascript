var api = {};

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

module.exports = api;