
var express = require('express');
var router  = express.Router();
var Produto = require('../model/produto');

// LISTA TODOS OS TODOS OS PRODUTOS
router.get('/', function(req, res, next) {
  Produto.find(function(err, produtos) {
    if (err) next(err);
    res.send(produtos);
  });
});
// ADICIONA UM PRODUTO
router.post('/', function(req, res, next) {
  var produto = new Produto(req.body);
  produto.save(function(err, produto) {
    if (err) next(err);
    res.send(produto);
  });
});
// OBTEM UM PRODUTO
router.get('/:id', function(req, res, next) {
  Produto.findById(req.params.id, function(err, produto) {
    if (err) next(err);
    res.send(produto);
  });
});
// ALTERA UM PRODUTO
router.put('/:id', function(req, res, next) {
  Produto.findByIdAndUpdate(
   req.params.id,    // id
   {$set: req.body}, // novos valores
   {new: true},      // cria caso não exista
    function(err, produto) {
    if (err) next(err);
    res.send(produto);
  });
});
// REMOVE UM PRODUTO
router.delete('/:id', function(req, res, next) {
  Produto.findByIdAndRemove(req.params.id, null, function(err, produto) {
    if (err) next(err);
    res.send(produto);    
  });
});

module.exports = router;