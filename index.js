var express    = require('express');
var mongoose   = require('mongoose');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(express.static('public'));
app.use(express.static('bower_components'));
app.use('/produtos', require('./routes/produtos'));

mongoose.connect('mongodb://localhost/estoque');

var db = mongoose.connection;
db.once('open', function() {
  app.listen(3000, function() {
    console.log('Servidor escutando na porta 3000');
  });
});