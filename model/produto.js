var mongoose = require('mongoose');

var ProdutoSchema = new mongoose.Schema({
  cod: Number,
  nome: String,
  qtd: Number
});

var Produto = mongoose.model('Produto', ProdutoSchema);

module.exports = Produto;