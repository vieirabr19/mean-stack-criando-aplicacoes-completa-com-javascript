var express = require('express');
var app = express();

app.use(express.static('./public'));
app.get('/v1/fotos', function(req, res) {
  var photos = [
    {_id: 1, titulo: 'Photo 1', url: 'https://www.infoescola.com/wp-content/uploads/2017/04/leao-126767138-1000x673.jpg'},
    {_id: 2, titulo: 'Photo 2', url: 'https://www.infoescola.com/wp-content/uploads/2017/04/leao-413856229-1000x667.jpg'}
  ];

  res.json(photos);
});

module.exports = app;
